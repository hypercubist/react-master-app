import React, { useState } from "react";
import styled from "styled-components";

const Btn = styled.div`
    width: 50px;
    height: 28px;
    background-color: navy;
    padding: 3px;
    box-shadow: 1px 1px 3px lightskyblue;
    border-radius: 3px;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
`

const Container = styled.div`
`
function Test(){

   
    return <div>
        <Btn>
            <a href="https://www.naver.com">Click</a>
        </Btn>

    </div>
}


export default Test;