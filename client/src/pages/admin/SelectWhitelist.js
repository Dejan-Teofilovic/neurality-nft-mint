import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, FormControlLabel, Radio, RadioGroup, Stack, Button } from '@mui/material';
import useWhitelist from '../../hooks/useWhitelist';
import useAdminAuth from '../../hooks/useAdminAuth';
import useAlertMessage from '../../hooks/useAlertMessage';
import { TRUE, WARNING } from '../../utils/constants';

export default function SelectWhitelist() {
  const { getAllWhitelists, whitelists, setActiveWhitelist, activeWhitelist } = useWhitelist();
  const { adminSignOut, accessToken } = useAdminAuth();
  const { openAlert } = useAlertMessage();

  const [whitelistId, setWhitelistId] = useState(0);

  const handleSelectWhitelist = (newValue) => {
    setWhitelistId(Number(newValue));
  };

  const handleSetActiveWhitelist = () => {
    if (whitelistId) {
      setActiveWhitelist(whitelistId);
    } else {
      openAlert({
        severity: WARNING,
        message: 'Please select a whitelist.'
      });
    }
  };

  useEffect(() => {
    if (accessToken) {
      getAllWhitelists();
    }
  }, [accessToken]);

  useEffect(() => {
    if (activeWhitelist) {
      setWhitelistId(activeWhitelist.id_whitelist);
    }
  }, [activeWhitelist?.id_whitelist]);

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
                    name="row-radio-buttons-group"
                    sx={{
                      justifyContent: 'center'
                    }}
                    onChange={(e, value) => handleSelectWhitelist(value)}
                    value={whitelistId}
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
                <Button variant="contained" onClick={handleSetActiveWhitelist}>Active</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}