import React from 'react';
import { Button, Card, CardContent, CardHeader, Stack, TextField } from '@mui/material';
import { string, object } from 'yup';
import { useFormik } from "formik";
import { Icon } from '@iconify/react';
import Typography from '../../theme/overrides/Typography';

// -------------------------------------------------------------------------------------------

const validSchema = object().shape({
  password: string().required('Password is required.')
});

// -------------------------------------------------------------------------------------------

export default function AdminLogin() {
  const formik = useFormik({
    initialValues: {
      password: '',
    },
    validationSchema: validSchema,
    onSubmit: (values) => {
      console.log(values);
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
                <Button>Log in</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}