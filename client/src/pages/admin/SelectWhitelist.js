import React, { useState, useEffect } from 'react';
import { Card, CardContent, FormControlLabel, Radio, RadioGroup, Stack, Button, Typography } from '@mui/material';
import useWhitelist from '../../hooks/useWhitelist';
import useAdminAuth from '../../hooks/useAdminAuth';
import useAlertMessage from '../../hooks/useAlertMessage';
import { TRUE } from '../../utils/constants';

export default function SelectWhitelist() {
  const {
    getAllWhitelists,
    whitelists,
    activeRegisterAvailableByWhitelistId,
    activeMintAvailableByWhitelistId,
    registerAvailableWhitelist,
    mintAvailableWhitelist
  } = useWhitelist();
  const { adminSignOut, accessToken } = useAdminAuth();
  const { openAlert } = useAlertMessage();

  const [registerAvailableWhitelistId, setRegisterAvailableWhitelistId] = useState(0);
  const [mintAvailableWhitelistId, setMintAvailableWhitelistId] = useState(0);

  const handleActiveRegister = (newValue) => {
    const whitelistId = Number(newValue);
    activeRegisterAvailableByWhitelistId(whitelistId);
  };

  const handleActiveMint = (newValue) => {
    const whitelistId = Number(newValue);
    activeMintAvailableByWhitelistId(whitelistId);
  };

  useEffect(() => {
    if (accessToken) {
      getAllWhitelists();
    }
  }, [accessToken]);

  useEffect(() => {
    if (registerAvailableWhitelist) {
      setRegisterAvailableWhitelistId(registerAvailableWhitelist.id_whitelist);
    } else {
      setRegisterAvailableWhitelistId(0);
    }
  }, [registerAvailableWhitelist?.id_whitelist]);

  useEffect(() => {
    if (mintAvailableWhitelist) {
      setMintAvailableWhitelistId(mintAvailableWhitelist.id_whitelist);
    } else {
      setMintAvailableWhitelistId(0);
    }
  }, [mintAvailableWhitelist?.id_whitelist]);

  return (
    <Stack justifyContent="center" height="100vh">
      <Stack direction="row" justifyContent="center">
        <Card>
          <CardContent>
            <Stack spacing={3}>
              <Typography color="white" fontSize={17} fontWeight={500} textAlign="center">Active whitelist</Typography>
              {
                whitelists.length > 0 && (
                  <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    sx={{
                      justifyContent: 'center'
                    }}
                    onChange={(e, value) => handleActiveRegister(value)}
                    value={registerAvailableWhitelistId}
                  >
                    {
                      whitelists.map(whitelist => (
                        whitelist.id_whitelist < 3 && <FormControlLabel
                          key={whitelist.id_whitelist}
                          control={<Radio />}
                          label={whitelist.name}
                          value={whitelist.id_whitelist}
                          disabled={whitelist.mint_available === TRUE}
                        />
                      ))
                    }
                    <FormControlLabel
                      control={<Radio />}
                      label="None"
                      value={0}
                    />
                  </RadioGroup>
                )
              }

              <Typography color="white" fontSize={17} fontWeight={500} textAlign="center">Active mint</Typography>

              {
                whitelists.length > 0 && (
                  <RadioGroup
                    row
                    name="row-radio-buttons-group"
                    sx={{
                      justifyContent: 'center'
                    }}
                    onChange={(e, value) => handleActiveMint(value)}
                    value={mintAvailableWhitelistId}
                  >
                    {
                      whitelists.map(whitelist => (
                        <FormControlLabel
                          key={whitelist.id_whitelist}
                          control={<Radio />}
                          label={whitelist.name}
                          value={whitelist.id_whitelist}
                        />
                      ))
                    }
                    <FormControlLabel
                      control={<Radio />}
                      label="None"
                      value={0}
                    />
                  </RadioGroup>
                )
              }

              <Stack direction="row" justifyContent="center" alignItems="center">
                <Button variant="contained" onClick={adminSignOut}>Sign out</Button>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
}