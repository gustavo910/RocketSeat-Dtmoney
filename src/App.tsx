import React, { useState } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components'
import { Dashboard } from './componentes/Dashboard';
import { Header } from './componentes/Header';
import { NewTransactionModal } from './componentes/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionsProvider } from './hooks/useTransactions';


Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen,setIsNewTransactionModalOpen]=useState(false)
  

  function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
  }
  function handleCloseNewTransactionModal(){
      setIsNewTransactionModalOpen(false)
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal} />
      <GlobalStyle/>
    </TransactionsProvider>
  );
}

