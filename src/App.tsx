import React, { useState, useCallback } from 'react';
import { AppBar, Container, Tabs, Tab, Box } from '@material-ui/core';
import { useGameContext } from 'shared/context/GameContext';
import { TABS } from 'shared/constants';
import ManualRoles from 'pages/ManualRoles';
import RandomRoles from 'pages/RandomRoles';

const App = () => {
  const { resetGame } = useGameContext();

  const [tab, setTab] = useState<typeof TABS[keyof typeof TABS]>(TABS.MANUAL_ROLES);

  const handleOnChangeTab = useCallback(
    (event: React.ChangeEvent<{}>, newTab: typeof TABS[keyof typeof TABS]) => {
      if (newTab !== tab) resetGame();
      setTab(newTab);
    },
    [tab, resetGame]
  );

  return (
    <>
      <AppBar position='static' color='transparent'>
        <Tabs
          value={tab}
          onChange={handleOnChangeTab}
          indicatorColor='primary'
          textColor='primary'
          centered
        >
          <Tab label='Ручне введення' value={TABS.MANUAL_ROLES} />
          <Tab label='Випадкова генерація' value={TABS.RANDOM_ROLES} />
        </Tabs>
      </AppBar>

      <Container component='main' maxWidth='sm'>
        <Box py={{ xs: 2, sm: 3 }}>
          {tab === TABS.MANUAL_ROLES && <ManualRoles />}
          {tab === TABS.RANDOM_ROLES && <RandomRoles />}
        </Box>
      </Container>
    </>
  );
};

export default App;
