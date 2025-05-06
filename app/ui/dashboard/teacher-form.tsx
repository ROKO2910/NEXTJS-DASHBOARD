'use client';

import { forbidden } from 'next/navigation';
import {useState} from 'react';

export default function TeacherForms(){
    const [formData, setFormData] = useState({
        id:'',
        name:'',
        first_name:'',
        last_name:'',
        email:'',
        phone:'',
        grade:'',
        address:'',
        birthday:'',
        status:'active',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    };

    const handleSubmit = (e: React.FormEvent) =>{
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return(
        <form onSubmit={handleSubmit} className='space-y-4 rounded-lg bg-gray-50 p-6 shadow-md'>

        </form>
    );


}