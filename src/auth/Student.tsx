import { useState } from "react";
import { VStack, Text, Button, Input } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useFormik } from "formik";

function Student() {
    const navigate = useNavigate();
    const toast = useToast();
    const [loading, setLoading] = useState<boolean>(false);


    const validateEmail = (email: string) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const formik = useFormik({
        initialValues: {
            name: "",
            DOB: "",
            password: "",
            confirmPassword: "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(false);

            /*  const { data, error } = await supabase.auth.signUp({
                name: values.name,  
                DOB: values.DOB,
                password: values.password,
                confirmPassword: values.confirmPassword,
              });
  
              setLoading(false);
  
              if (error) {
                  toast({
                      title: "Signup Failed",
                      description: error.message,
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                      position: "top-right",
                  });
                  return false;
              } else if (data) {
                  toast({
                      title: "Signup Successful",
                      description: "You will be redirected to the dashboard in a Moment.",
                      status: "success",
                      duration: 9000,
                      isClosable: true,
                      position: "top-right",
                  });
                  window.location.href = "/dashboard/*";
                  return true;
              }*/
        },

        validate: (values) => {
            const errors: { confirmPassword?: JSX.Element; password?: JSX.Element ; name?:JSX.Element ; DOB?:JSX.Element } = {};
            
            if (!values.name) {
                errors.name = <span style={{ color: 'red', fontSize: 'sm' }}>Name is required</span>;
            }
            if (!values.DOB) {
                errors.DOB = <span style={{ color: 'red', fontSize: 'sm' }}>DOB is required</span>;
            }
            if (!values.password) {
                errors.password = <span style={{ color: 'red', fontSize: 'sm' }}>Password is required</span>;
            }
            if (!values.confirmPassword) {
                errors.confirmPassword = <span style={{ color: 'red', fontSize: 'sm' }}>Re-type Password is required</span>;
            }
             
            if (values.password !== values.confirmPassword) {
                errors.password = <span style={{ color: 'red', fontSize: 'sm' }}>Passwords dont match</span>;
            }

            return errors;
        },
    });


    return (
        <>
            <VStack
                width={["90%", "100%", "100%", "50%"]}
                gap={6}
                align={'center'}
                justifyContent={'center'}
                height={"100vh"}
                ml={['4', '4', '', '']}
            >
                <Text
                    fontSize={['xl', 'xl', '3xl', '3xl']}
                    fontWeight={600}
                    textAlign={['center', 'center', 'center', 'center']}
                    width={['100%', '100%', '100%', '95%']}
                    ml={['', '', '', '10']}
                >
                    Enroll Today for a Journey of Learning and Fun!
                </Text>
                <VStack
                    width={'100%'}
                    align={['center', 'center', 'center', 'flex-start']}
                    mt={6}
                    gap={8}
                >

                    <form onSubmit={formik.handleSubmit}>
                        <Text
                            color={'#23272A'}
                            fontWeight={400}
                            fontSize={'lg'}
                            py={4}
                        >
                            Student’s Name
                        </Text>
                        <Input
                            type="text"
                            width={['100%', '100%', '100%', '100%']}
                            bg={'#4040401A'}
                            color={'#A6A6A6'}
                            height={12}
                            py={4}
                            _focus={{
                                bg: '#F0F2F5'
                            }}
                            placeholder="Enter Student’s Name"
                            {...formik.getFieldProps('name')}

                        />
                        {formik.errors.name && <div>{formik.errors.name}</div>}
                        <Text
                            color={'#23272A'}
                            fontWeight={400}
                            fontSize={'lg'}
                            py={4}
                        >
                            Student’s Date of Birth
                        </Text>
                        <Input
                            type="date"
                            width={['100%', '100%', '100%', '100%']}
                            bg={'#4040401A'}
                            color={'#A6A6A6'}
                            height={12}
                            py={4}
                            _focus={{
                                bg: '#F0F2F5'
                            }}
                            placeholder="Enter Student’s DOB"
                            {...formik.getFieldProps('DOB')}

                        />
                        {formik.errors.DOB && <div>{formik.errors.DOB}</div>}
                        <Text
                            color={'#23272A'}
                            fontWeight={400}
                            fontSize={'lg'}
                            py={4}
                        >
                            Password
                        </Text>
                        <Input
                            type='password'
                            width={['100%', '100%', '100%', '100%']}
                            bg={'#4040401A'}
                            color={'#A6A6A6'}
                            height={12}
                            py={4}
                            _focus={{
                                bg: '#F0F2F5'
                            }}
                            placeholder="Enter Password"
                            {...formik.getFieldProps('password')}

                        />
                        {formik.errors.password && <div>{formik.errors.password}</div>}

                        <Text
                            color={'#23272A'}
                            fontWeight={400}
                            fontSize={'lg'}
                            py={4}
                        >
                            Confirm Password
                        </Text>

                        <Input
                            type='password'
                            width={['100%', '100%', '100%', '100%']}
                            bg={'#4040401A'}
                            color={'#A6A6A6'}
                            height={12}
                            py={4}
                            _focus={{
                                bg: '#F0F2F5'
                            }}
                            placeholder="Re-type Password"
                            {...formik.getFieldProps('confirmPassword')}

                        />
                        {formik.errors.confirmPassword && <div>{formik.errors.confirmPassword}</div>}


                        <Button
                            mt={10}
                            width={['350px', '350px', '700px', '502px']}
                            bg={'#5865F2'}
                            type="submit"
                            isLoading={formik.isSubmitting}
                            color={'white'}
                            _hover={{
                                bg: '#FF6B3C'
                            }}
                            onClick={() => navigate('/auth/parent-signup')}

                        >
                            {
                                loading ? <Spinner marginLeft={2} size="sm" /> : "Next"
                            }
                        </Button>
                    </form>
                </VStack>

            </VStack >
        </>
    )
}

export default Student

