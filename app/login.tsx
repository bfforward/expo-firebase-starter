import { Image, StyleSheet, TextInput as RNTextInput } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { appAssets } from '@/assets/app';
import { Button, Text, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRef } from 'react';
import { useTogglePasswordVisibility } from '@/hooks/useTogglePasswordVisibility';
import useSession from '@/hooks/useSession';

const LoginScreen = () => {
  const passwordRef = useRef<RNTextInput>(null);
  const { passwordVisibility, onPasswordVisibleToggle, rightIcon } =
    useTogglePasswordVisibility();
  const { login } = useSession();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().label('Email').email('Invalid email').required(),
      password: Yup.string().label('Password').required('Password is required'),
    }),
    onSubmit: (values, actions) => {
      try {
        actions.setSubmitting(true);
        const { email, password } = values;
        login(email, password);
      } catch (error) {
        console.log(error);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });

  const styles = StyleSheet.create({
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={<Image source={appAssets.header} style={styles.reactLogo} />}
    >
      {/* LOGIN FORM */}
      <Text>Login</Text>

      {/* EMAIL */}
      <TextInput
        label="Email"
        mode="outlined"
        left={<TextInput.Icon icon="email" />}
        autoCapitalize="none"
        keyboardType="email-address"
        autoFocus
        value={formik.values.email}
        onChangeText={formik.handleChange('email')}
        onBlur={formik.handleBlur('email')}
        error={!!(formik.touched.email && formik.errors.email)}
        onSubmitEditing={() => passwordRef?.current?.focus()}
        returnKeyType="next"
      />
      {formik.touched.email && formik.errors.email && (
        <Text style={{ color: 'red' }}>{formik.errors.email}</Text>
      )}

      {/* PASSWORD */}
      <TextInput
        ref={passwordRef}
        label="Password"
        mode="outlined"
        left={<TextInput.Icon icon="lock" />}
        right={
          <TextInput.Icon icon={rightIcon} onPress={onPasswordVisibleToggle} />
        }
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        value={formik.values.password}
        onChangeText={formik.handleChange('password')}
        onBlur={formik.handleBlur('password')}
        error={!!(formik.touched.password && formik.errors.password)}
        onSubmitEditing={() => formik.handleSubmit()}
        returnKeyType="done"
      />
      {formik.touched.password && formik.errors.password && (
        <Text style={{ color: 'red' }}>{formik.errors.password}</Text>
      )}

      {/* LOGIN BUTTON */}
      <Button
        mode="contained"
        onPress={() => formik.handleSubmit()}
        icon="login"
      >
        Login
      </Button>
    </ParallaxScrollView>
  );
};

export default LoginScreen;
