import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, FormControlLabel, Radio, RadioGroup, Stack, Button } from '@mui/material';
import useWhitelist from '../../hooks/useWhitelist';
import useAdminAuth from '../../hooks/useAdminAuth';
import { TRUE } from '../../utils/constants';

export default function SelectWhitelist() {
  const { getAllWhitelists, whitelists } = useWhitelist();
  const { adminSignOut } = useAdminAuth();

  useEffect(() => {
    getAllWhitelists();
  }, []);

  return (
    <Stack justifyContent="center" height="100vh">
      <Stack direction="row" justifyContent="center">
        <Card>
          <CardHeader
            title="Set a whitelist to be registered."
            titleTypographyProps={{
              fontSize: 36,
              fontWeight: 700,
              color: 'white'
            }}
          />
          <CardContent>
            <Stack spacing={3}>
              {
                whitelists.length > 0 && (
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{
                      justifyContent: 'center'
                    }}
                  >
                    {
                      whitelists.map(whitelist => (
                        <FormControlLabel
                          key={whitelist.id_whitelist}
                          control={<Radio />}
                          label={whitelist.name}
                          value={whitelist.id_whitelist}
                          disabled={whitelist.end === TRUE}
                        />
                      ))
                    }
                  </RadioGroup>
                )
              }

              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Button variant="outlined" onClick={adminSignOut}>Sign out</Button>
                <Button variant="contained">Active</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}