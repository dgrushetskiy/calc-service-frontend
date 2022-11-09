import React, {useCallback, useEffect, useState} from 'react';
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import styled from "@emotion/styled";

const defaultData = [
    {
        id: 1,
        createdAt: "",
        updatedAt: "",
        active: true,
        uuid: "",
        productName: "СберПрайм",
        reports: [
            {
                id: 1,
                createdAt: "",
                updatedAt: "",
                active: true,
                productId: 1,
                datePeriod: "",
                presentation: 0,
                sale: 0,
                plan: 0,
                planImpl: 6,
                delta: 8,
                conversions: 12
            },
            {
                id: 2,
                createdAt: "",
                updatedAt: "",
                active: true,
                productId: 1,
                datePeriod: "",
                presentation: 0,
                sale: 0,
                plan: 4,
                planImpl: 10,
                delta: 123,
                conversions: 13
            }
        ]
    },
    {
        id: 2,
        createdAt: "",
        updatedAt: "",
        active: true,
        uuid: "",
        productName: "СберПрайм+",
        reports: [
            {
                id: 1,
                createdAt: "",
                updatedAt: "",
                active: true,
                productId: 1,
                datePeriod: "",
                presentation: 1,
                sale: 2,
                plan: 3,
                planImpl: 4,
                delta: 5,
                conversions: 1
            },
            {
                id: 2,
                createdAt: "",
                updatedAt: "",
                active: true,
                productId: 1,
                datePeriod: "",
                presentation: 8,
                sale: 3,
                plan: 2,
                planImpl: 4,
                delta: 3,
                conversions: 1
            }
        ]
    }
]

const AppWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;
  gap: 16px
`;

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-flow: row nowrap;
  gap: 16px;
`;

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Тут написать запрос
        fetch('')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>) => {
        const name = event.currentTarget.name;
        switch (name) {
            case "1":
                return;
            case "2":
                return;
            case "3":
                return;
            default:
                return;
        }
    }, []);

    return (
        <AppWrapper>
            <ButtonsWrapper>
                <Button name={'1'} variant="contained" onClick={handleClick}>Первый вариант</Button>
                <Button name={'2'} variant="contained" onClick={handleClick}>Второй вариант</Button>
                <Button name={'3'} variant="contained" onClick={handleClick}>Третий вариант</Button>
            </ButtonsWrapper>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Продукт</TableCell>
                            <TableCell align="right">Презентаций</TableCell>
                            <TableCell align="right">Продаж</TableCell>
                            <TableCell align="right">Конверсия</TableCell>
                            <TableCell align="right">Динамика Т1</TableCell>
                            <TableCell align="right">План</TableCell>
                            <TableCell align="right">Выполнение плана</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {defaultData.map((row) => (
                            <>
                                {row.reports.map((report) => (
                                    <>
                                        <TableRow key={row.id}>
                                            <TableCell component="th" scope="row">{row.productName}</TableCell>
                                            <TableCell align="right">{report.presentation}</TableCell>
                                            <TableCell align="right">{report.sale}</TableCell>
                                            <TableCell align="right">{report.conversions}</TableCell>
                                            <TableCell align="right">{report.delta}</TableCell>
                                            <TableCell align="right">{report.plan}</TableCell>
                                            <TableCell align="right">{report.planImpl}</TableCell>
                                        </TableRow>
                                    </>
                                ))}
                            </>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </AppWrapper>
    );
}

export default App;
