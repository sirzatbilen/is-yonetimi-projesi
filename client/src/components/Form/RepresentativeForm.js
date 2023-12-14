import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Yetkili Adı Soyadı" {...register("Yetkili Adı Soyadı", { required: true, max: 256 })} />
            <input type="text" placeholder="Görev Unvanı" {...register("Görev Unvanı", { required: true, max: 256 })} />
            <input type="text" placeholder="Mobil Telefonu" {...register("Mobil Telefonu", { required: true })} />
            <input type="text" placeholder="İş Telefonu" {...register("İş Telefonu", { required: true })} />
            <input type="text" placeholder="Sabit Telefon ve Dahilisi" {...register("Sabit Telefon ve Dahilisi", { max: 64 })} />
            <input type="text" placeholder="E-Posta" {...register("E-Posta", { max: 256 })} />
            <input type="datetime" placeholder="Doğum Tarihi" {...register("Doğum Tarihi", { required: true })} />

            <input type="submit" />
        </form>
    );
}