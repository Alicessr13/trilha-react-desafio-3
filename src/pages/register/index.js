import React from "react";
import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { useForm } from "react-hook-form";

import { Container, Title, Column, TitleRegister, SubtitleRegister, Row, Wrapper } from './styles';

const Register = () => {
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            // Simular um POST de cadastro no servidor
            console.log("Form Data", formData);
            // Se o cadastro for bem-sucedido, redirecione o usuário para a página de login
            navigate('/login');
        } catch (e) {
            // TODO: lidar com o erro
        }
    };

    return (
        <>
            <Header />
            <Container>
                <Column>
                    <Title>A plataforma para você aprender com experts, dominar as principais tecnologias e entrar nas empresas mais desejadas.</Title>
                </Column>
                <Column>
                    <Wrapper>
                        <TitleRegister>Crie sua conta</TitleRegister>
                        <SubtitleRegister>Cadastre-se e comece sua jornada!</SubtitleRegister>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Input placeholder="Nome" leftIcon={<MdPerson />} name="name" control={control} />
                            {errors.name && <span>Nome é obrigatório</span>}
                            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email" control={control} />
                            {errors.email && <span>E-mail é obrigatório</span>}
                            <Input type="password" placeholder="Senha" leftIcon={<MdLock />} name="senha" control={control} />
                            {errors.senha && <span>Senha é obrigatório</span>}
                            <Button title="Cadastrar" variant="primary" type="submit" />
                        </form>
                        <Row>
                            <span>Já tem uma conta?</span>
                            <Button title="Entrar" variant="link" onClick={() => navigate('/login')} />
                        </Row>
                    </Wrapper>
                </Column>
            </Container>
        </>
    );
};

export { Register };