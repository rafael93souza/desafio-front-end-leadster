"use client"
import React from 'react';

import { Pagination } from 'antd';
import { PaginationContainer, PaginationContent } from './styles';
import { PaginationProps } from '@/@types/pagination-type';


export function PaginatationComponent({totalCount, onChange, page}:PaginationProps){
    return (
        <PaginationContainer>
            <PaginationContent>
                <h2>Página</h2>
                <Pagination total={totalCount}onChange={onChange} current={page} />
            </PaginationContent>
        </PaginationContainer>
    )
}
