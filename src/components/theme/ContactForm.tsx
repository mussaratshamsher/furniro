"use client"  
import React from 'react'  

import { zodResolver } from "@hookform/resolvers/zod"  
import { useForm } from "react-hook-form"  
import { z } from "zod"  
   
import { Button } from "@/components/ui/button"  
import {  
  Form,  
  FormControl,  
  FormDescription,  
  FormField,  
  FormItem,  
  FormLabel,  
  FormMessage,  
} from "@/components/ui/form"  
import { Input } from "@/components/ui/input"  

const formSchema = z.object({  
       userName: z.string().min(3, {  
        message: "UserName must be at least 3 characters"  
    }).max(20, {  
        message: "Write a maximum of 20 characters"  
    })    
})  

type FormType = z.infer<typeof formSchema>  

export default function ContactForm() {  
    const form = useForm<FormType>({  
        resolver: zodResolver(formSchema),  
        defaultValues: {  
            userName: "Mussarat",  
        }  
    })  

    function onSubmit(values: FormType) {   
        console.log(values);  
    }  

    return (  
        <div>  
            <Form {...form}>  
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">  
                    <FormField  
                        control={form.control}  
                        name="userName"  // Match the schema name here  
                        render={({ field }) => (  
                            <FormItem>  
                                <FormLabel>Username</FormLabel>  
                                <FormControl>  
                                    <Input placeholder="Name here" {...field} />  
                                </FormControl>  
                                <FormDescription>  
                                    
                                </FormDescription>  
                                <FormMessage />  
                            </FormItem>  
                        )}  
                    />  
                    <Button type="submit">Submit</Button>  
                </form>  
            </Form>  
        </div>  
    )  
}