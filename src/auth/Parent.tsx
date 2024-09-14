import { useState } from "react";
import { VStack, Text, Button, Input } from "@chakra-ui/react"
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useFormik } from "formik";

function Parent() {
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
            email: "",
            contactNo: "",
        },
        onSubmit: async (values, { setSubmitting }) => {
            setSubmitting(false);

            /*  const { data, error } = await supabase.auth.signUp({
                name: values.name,  
                email: values.email,
                contactNo: values.contactNo
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
            const errors: { email?: JSX.Element; contactNo?: JSX.Element;name?:JSX.Element} = {};

            if (!values.name) {
                errors.name = <span style={{ color: 'red', fontSize: 'sm' }}>Name is required</span>;
            }
           if(!values.email){
                errors.email=<span style={{ color: 'red', fontSize: 'sm' }}>Email is required</span>
            }
            if (!values.contactNo) {
                errors.contactNo = <span style={{ color: 'red', fontSize: 'sm' }}>Contact Info is required</span>;
            }   

            if (!validateEmail(values.email)) {
                errors.email = <span style={{ color: 'red', fontSize: 'sm' }}>Correct Format email is required</span>;

            }

            if (values.contactNo.length < 10) {
                errors.contactNo = <span style={{ color: 'red', fontSize: 'sm' }}>Number is too short</span>;
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
                            Parent/Guardians Name
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
                            placeholder="asim"
                            {...formik.getFieldProps('name')}

                        />
                        {formik.errors.name && <div>{formik.errors.name}</div>}
                        <Text
                            color={'#23272A'}
                            fontWeight={400}
                            fontSize={'lg'}
                            py={4}
                        >
                            Parent/Guardian’s Email
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
                            Parent/Guardian’s Contact No
                        </Text>
                        <Input
                            type='number'
                            width={['100%', '100%', '100%', '100%']}
                            bg={'#4040401A'}
                            color={'#A6A6A6'}
                            height={12}
                            py={4}
                            _focus={{
                                bg: '#F0F2F5'
                            }}
                            placeholder="Enter parent’s contact number"
                            {...formik.getFieldProps('contactNo')}

                        />
                        {formik.errors.contactNo && <div>{formik.errors.contactNo}</div>}

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
                        >
                            {
                                loading ? <Spinner marginLeft={2} size="sm" /> : "Register"
                            }
                        </Button>
                    </form>
                </VStack>

            </VStack >
        </>
    )
}

export default Parent

