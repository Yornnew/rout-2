<template>
    <div class="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md m-8">
        <h2 class="text-2xl font-semibold mb-6 text-gray-800">User Information</h2>
        <Form :validation-schema="validationSchema" @submit="handleSubmit" class="space-y-4">
            <!-- Name Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Name</label>
                <Field name="name" type="text" v-model="form.name"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name" />
                <ErrorMessage name="name" class="text-red-600 text-sm mt-1" />
            </div>

            <!-- Email Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
                <Field name="email" type="email" v-model="form.email"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email" />
                <ErrorMessage name="email" class="text-red-600 text-sm mt-1" />
            </div>

            <!-- Age Field -->
            <div>
                <label class="block mb-1 text-sm font-medium text-gray-700">Age</label>
                <Field name="age" type="number" v-model="form.age"
                    class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your age" />
                <ErrorMessage name="age" class="text-red-600 text-sm mt-1" />
            </div>
            
            <!--salary-->
            

            <!-- Submit Button -->
            <button type="submit"
                class="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition duration-200">
                Submit
            </button>
        </Form>
    </div>
</template>

<script>
import axios from 'axios';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
export default {
    name: 'UserForm',
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            form: {
                name: '',
                email: '',
                age: '',
            
            },
         validationSchema: yup.object(
                {
                    name: yup.string().matches(/^[A-Za-z\s]+$/,
                        'Only alphabet and space is accepted'
                    )
                        .min(3, 'Name must be at least 3 characters')
                        .required('Name is required'),
                    email: yup.string().email('Invalid email').required('Email is required'),
                    age: yup.number().min(10, 'Minimum age of 10').max(120, 'Maximum age of 120').required('Age is required'),
                    
                })
        }
    
    },
    methods: {
                async handleSubmit() {
                    // You can add validation or API calls here
                    try{
                        const Response=await axios.post('https://68648e915b5d8d03397d8138.mockapi.io/api/v1/users',{
                            name:this.form.name,
                            email:this.form.email,
                            age: this.form.age
                        }
                        )
                    console.log('Form submitted successfully:', Response.data);
                    this.form={
                        name: '',
                        email: '',
                        age: ''
                    };
                    alert('User information submitted successfully!');
                    this.$router.push('/user');
                    }catch(error){
                    console.error('Error submitting form',error);
                    }   
                }
            }
    }
</script>
