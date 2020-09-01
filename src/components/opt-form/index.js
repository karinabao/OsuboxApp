import React from 'react';
import { Container, Input, Break, Button, Text, Base, Error, Submit, BottomBase } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
    return <Input {...restProps} />;
}

OptForm.Button = function OptFormButton({ children, ...restProps }) {
    return (
        <Button {...restProps}>
            {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
        </Button>
    )
}

OptForm.Break = function OptBreak({ ...restProps }) {
    return <Break {...restProps} />;
}

OptForm.Text = function OptFormText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
}

OptForm.Error = function OptFormError({ children, ...restProps}) {
    return <Error {...restProps}>{children}</Error>
}

OptForm.Base = function OptFormBase({ children, ...restProps }) {
    return <Base {...restProps}>{children}</Base>;
}

OptForm.BottomBase = function OptFormBottomBase({ children, ...restProps }) {
    return <BottomBase {...restProps}>{children}</BottomBase>;
}

