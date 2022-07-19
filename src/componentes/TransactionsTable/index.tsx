import { useContext, useEffect, useState } from "react";
import { useTransactions } from "../../hooks/useTransactions";
import { api } from "../../Services/api";

import { Container } from "./styles";




export function TransactionTable(){
    const {transactions} = useTransactions();

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(tr=>(
                        
                            <tr key={tr.id}>
                            <td>{tr.title}</td>
                            <td className={tr.type}>{new Intl.NumberFormat('pt-BR',{
                                style:'currency',
                                currency:'BRL'
                            }).format(tr.amount)}</td>
                            <td>{tr.category}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(
                                new Date(tr.createdAt)
                                )}
                            </td>
                        </tr>
                        
                    ))}


                </tbody>
            </table>

        </Container>
    )
}