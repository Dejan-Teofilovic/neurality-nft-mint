import React from 'react';
import { Button, Card, CardContent, CardHeader, Stack, TextField, Typography } from '@mui/material';
import { string, object } from 'yup';
import { useFormik } from "formik";
import { Icon } from '@iconify/react';
import useAdminAuth from '../../hooks/useAdminAuth';

// -------------------------------------------------------------------------------------------

const validSchema = object().shape({
  password: string().required('Password is required.')
});

// -------------------------------------------------------------------------------------------

export default function AdminLogin() {
  const { adminSignIn } = useAdminAuth();
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      const { password } = values;
      adminSignIn(password);
    }
  });

  return (
    <Stack justifyContent="center" height="100vh">
      <Stack direction="row" justifyContent="center">
        <Card>
          <CardHeader
            title="Admin Login"
            titleTypographyProps={{
              textAlign: 'center',
              fontSize: 36,
              fontWeight: 700,
              color: 'white'
            }}
          />
          <CardContent>
            <Stack spacing={3}>
              <TextField
                type="password"
                name="password"
                label="Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={
                  formik.touched.password && formik.errors.password ? (
                    <Typography component="span" fontSize={12} fontWeight={700} sx={{ display: 'flex', alignItems: 'center', mx: 0 }}>
                      <Icon icon="ant-design:exclamation-circle-filled" />&nbsp;
                      {formik.touched.password && formik.errors.password}
                    </Typography>) : (<></>)
                }
                fullWidth
              />
              <Stack direction="row" justifyContent="center" onClick={formik.handleSubmit}>
                <Button variant="contained" sx={{ borderRadius: 0, fontSize: 18 }}>Log in</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}