import React from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Şirketin Marka Adı" {...register("Şirketin Marka Adı", { required: true })} />
            <input type="text" placeholder="Şirketin Ticari Unvanı" {...register("Şirketin Ticari Unvanı", { required: true })} />
            <input type="text" placeholder="Şirket veya Kurumun Türü " {...register("Şirket veya Kurumun Türü ", { required: true })} />
            <input type="text" placeholder="Ana Firmanın Ticari Unvanı" {...register("Ana Firmanın Ticari Unvanı", {})} />
            <input type="text" placeholder="Adres Bilgisi" {...register("Adres Bilgisi", { required: true })} />
            <input type="text" placeholder="Vergi Dairesi" {...register("Vergi Dairesi", { required: true, max: 256 })} />
            <input type="number" placeholder="Vergi Numarası" {...register("Vergi Numarası", { required: true })} />
            <input type="number" placeholder="Mersis Numarası" {...register("Mersis Numarası", { required: true })} />
            <input type="text" placeholder="Web Sitesi" {...register("Web Sitesi", {})} />
            <input type="text" placeholder="E-Mail Adresi" {...register("E-Mail Adresi", { required: true, max: 256 })} />
            <input type="text" placeholder="Telefon numarası" {...register("Telefon numarası", { required: true, max: 256 })} />
            <input type="text" placeholder="Faks numarası" {...register("Faks numarası", {})} />
            <input type="text" placeholder="Logo" {...register("Logo", { max: 256 })} />
            <input type="text" placeholder="Referansı" {...register("Referansı", { max: 256 })} />
            <input type="datetime" placeholder="Kayıt Tarihi" {...register("Kayıt Tarihi", { required: true })} />
            <input type="text" placeholder="Kaydeden SBE Mühendlislik Çalışanı" {...register("Kaydeden SBE Mühendlislik Çalışanı", { required: true, max: 256 })} />

            <input type="submit" />
        </form>
    );
}