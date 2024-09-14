import { useState } from "react";
import { VStack, Text, HStack, Button, Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useFormik } from "formik";

import {
    AiOutlineEye,
    AiOutlineEyeInvisible,
} from "react-icons/ai";


function Login() {
    const navigate = useNavigate();
    const toast = useToast();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const validateEmail = (email: string) => {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    };

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(false);

            /*  const { data, error } = await supabase.auth.signInWithPassword({
                  email: values.email,
                  password: values.password,
              });
  
              setLoading(false);
  
              if (error) {
                  toast({
                      title: "Login Failed",
                      description: error.message,
                      status: "error",
                      duration: 9000,
                      isClosable: true,
                      position: "top-right",
                  });
                  return false;
              } else if (data) {
                  toast({
                      title: "Login Successful",
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
            const errors: { email?: JSX.Element; password?: JSX.Element } = {};

            // Check if email is empty
            if (!values.email) {
                errors.email = <span style={{ color: 'red', fontSize: 'sm' }}>Email is required</span>;
            } else if (!validateEmail(values.email)) {
                errors.email = <span style={{ color: 'red', fontSize: 'sm' }}>Invalid email</span>;
            }

            // Check if password is empty
            if (!values.password) {
                errors.password = <span style={{ color: 'red', fontSize: 'sm' }}>Password is required</span>;
            } else if (values.password.length < 8) {
                errors.password = <span style={{ color: 'red', fontSize: 'sm' }}>Password too short</span>;
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
            >
                <Text
                    fontSize={['xl', 'xl', '3xl', '3xl']}
                    fontWeight={600}
                >
                    Login to Your Account
                </Text>
                <VStack
                    width={'full'}
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
                            Enter your Email
                        </Text>
                        <Input
                            type="email"
                            width={['100%', '100%', '100%', '100%']}
                            bg={'#4040401A'}
                            color={'#A6A6A6'}
                            height={12}
                            py={4}
                            _focus={{
                                bg: '#F0F2F5'
                            }}
                            placeholder="xyz@gmail.com"
                            {...formik.getFieldProps('email')}

                        />
                        {formik.errors.email && <div>{formik.errors.email}</div>}
                        <Text
                            color={'#23272A'}
                            fontWeight={400}
                            fontSize={'lg'}
                            py={4}
                        >
                            Enter your password
                        </Text>
                        <InputGroup>
                            <Input
                                type={showPassword ? "text" : "password"}
                                width={['100%', '100%', '100%', '100%']}
                                bg={'#4040401A'}
                                color={'#A6A6A6'}
                                height={12}
                                py={4}
                                _focus={{
                                    bg: '#F0F2F5'
                                }}
                                placeholder="password"
                                {...formik.getFieldProps('password')}
                            />

                            <InputRightElement width="4rem">
                                <Button
                                    h="3rem"
                                    size="md"
                                    onClick={toggleShowPassword}
                                    _focus={{ outline: "none" }}
                                    marginTop={2}
                                    bg={'none'}
                                >
                                    {showPassword ? (
                                        <Icon as={AiOutlineEyeInvisible} />
                                    ) : (
                                        <Icon as={AiOutlineEye} />
                                    )}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        {formik.errors.password && <div>{formik.errors.password}</div>}
                        <HStack
                            width={['350px', '350px', '450px', '502px']}
                            align={'flex-start'}
                            fontWeight={400}
                            py={4}
                        >
                            <Text color={'#23272A'} as={'u'} >Forgot password?</Text>
                        </HStack>

                        <Button
                            width={['350px', '350px', '450px', '502px']}
                            bg={'#5865F2'}
                            type="submit"
                            isLoading={formik.isSubmitting}
                            color={'white'}
                            _hover={{
                                bg: '#FF6B3C'
                            }}
                        >
                            {
                                loading ? <Spinner marginLeft={2} size="sm" /> : "Login"
                            }
                        </Button>
                    </form>
                </VStack>
                <HStack>
                    <Text
                        color={'#23272A69'}
                        fontWeight={'400'}
                    >
                        New Here?
                    </Text>
                    <Text
                        as={'u'}
                        color={'#23272A'}
                        fontWeight={400}
                        onClick={() => navigate('/auth/student-signup')}
                        cursor={'pointer'}
                        _hover={
                            {
                                fontWeight: 600
                            }
                        }
                    >
                        Register Now!
                    </Text>
                </HStack>
            </VStack >
        </>
    )
}

export default Login

