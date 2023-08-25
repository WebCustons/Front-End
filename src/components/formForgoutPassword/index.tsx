import { useState } from 'react';
import { StyledFormForgoutPassword } from './style';
import { InputValidator } from '../inputs';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {FormForgoutPasswordRequest,schema} from './validators';
import { useUser } from '../../hooks/useProduct';


export const FormForgoutPassword = () => {
    const [forgotPassword, setForgotPassword] = useState(true);

    const { register, handleSubmit, formState: { errors },} = useForm<FormForgoutPasswordRequest>({
        resolver: zodResolver(schema),
    })

    const { sendEmail } = useUser()

    const submit: SubmitHandler<FormForgoutPasswordRequest> = async (email) => {
        console.log(email);
    }

    return (
        <StyledFormForgoutPassword onSubmit={handleSubmit(submit)}>
            <InputValidator
                id="email"
                label="Digite um Email existente na plataforma:"
                type="email"
                placeholder="Digite seu Email"
                error={errors.email?.message}
                {...register("email", { required: "Digite e-mail." })}
            />
            <div className="buttonsForgoutPassword">

                <button className="buttonVoltar" onClick={() => setForgotPassword(true)}>Voltar</button>
                <button className="buttonSubmit">Enviar</button><br />

            </div>
        </StyledFormForgoutPassword>
    )
}