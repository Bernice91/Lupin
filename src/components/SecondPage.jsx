import { Accordion, AccordionDetails, AccordionSummary, Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, CardHeader, CardMedia, Divider, Grid2, Menu, MenuItem, Stack, TextField, Typography } from '@mui/material'
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ReportIcon from '@mui/icons-material/Report';
import NoFoodIcon from '@mui/icons-material/NoFood';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Instagram, LinkedIn, X, YouTube } from "@mui/icons-material";
import React from 'react'

const SecondPage = () => {
    return (
        <Box sx={{ marginTop: '50px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <Typography variant='h4' sx={{ fontSize: '25px', fontWeight: 'bold', marginLeft: '50px' }}>Popular Health Checkup Packages</Typography>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize', marginLeft: '500px' }}>Compare Packages</Button>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize', marginLeft: '15px' }}>Create Your Package</Button>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize', marginLeft: '15px' }}>View All Package</Button>
            </Box>
            <Box sx={{ width: '100%', padding: '10px', display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>


                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>


                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>

                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>

                

            </Box>

            <Box sx={{ width: '100%', marginTop: '50px', display: 'flex', flexDirection: 'row', gap: '20px', }}>

                <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '25px', marginLeft: '50px' }}>Frequently Booked Tests</Typography>
                <Button variant='outlined' color='#2CCE6C' sx={{ color: '#2CCE6C', textTransform: 'capitalize', marginLeft: '850px' }}>View All Tests</Button>
            </Box>
            <Box sx={{ width: '100%', padding: '10px', display: 'flex', flexDirection: 'row', gap: '20px', marginBottom: '50px', justifyContent: 'center' }}>
                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>
                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>
                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>
                <Card>
                    <CardContent sx={{ backgroundColor: '#6C4675', color: 'white', display: 'flex', flexDirection: 'row' }} >
                        <CardContent>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Glucose-6 Phosphate</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Dehydrogenase(G6PD),</Typography>
                            <Typography variant='h6' sx={{ fontSize: '12px' }}>Quantative</Typography>
                        </CardContent>
                        <CardContent sx={{ display: 'flex', marginLeft: '40px', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant='h6'>₹790</Typography>
                        </CardContent>
                    </CardContent>

                    <CardContent sx={{ borderRadius: '0px' }}>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><BloodtypeIcon sx={{ padding: '0 10px' }} /> 20 Test Parameter(s)</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><ReportIcon sx={{ padding: '0 10px' }} />Reports within 10 hours</Typography>
                        <Typography variant='body1' sx={{ fontSize: '12px', paddingTop: '10px', paddingBottom: '10px', display: 'flex', flexDirection: 'row' }}><NoFoodIcon sx={{ padding: '0 10px' }} />8 hours of fasting required</Typography>
                    </CardContent>
                    <CardActions sx={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', borderTopStyle: 'solid', borderColor: '#a4a4a6' }}>
                        <Button size='small' sx={{ color: '#2CCE6C', fontSize: '12px', marginRight: '75px' }}>Know More</Button>
                        <Button variant='outlined' color='#2CCE6C' size='small' sx={{ color: '#2CCE6C', fontSize: '12px' }}>Add to Cart</Button>
                    </CardActions>

                </Card>
            </Box>

            <Box sx={{ backgroundColor: '#6C4675', width: '100%', height: '50vh', padding: '50px', display: 'flex', flexDirection: 'column' }}>


                <Typography variant='h4' sx={{ fontWeight: 'bold', color: 'white' }}>You choose Best in class Diagnostic Experience in Lupin Diagnostics</Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '20px', alignItems: 'center' }}>
                    <Card variant="outlined" sx={{ maxWidth: 360, marginTop: '50px', width: '100%' }}>
                        <Box sx={{ p: 2, height: '26vh', backgroundColor: '#6C4675' }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    <TrendingUpIcon sx={{ fontSize: '50px', color: 'white', marginTop: '25px' }} />
                                </Typography>

                            </Stack>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                Trend Analysis
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                Report
                            </Typography>
                        </Box>
                    </Card>

                    <Card variant="outlined" sx={{ maxWidth: 360, marginTop: '50px', width: '100%' }}>
                        <Box sx={{ p: 2, height: '26vh', backgroundColor: '#6C4675' }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    <StarIcon sx={{ fontSize: '50px', color: 'white', marginTop: '25px' }} />
                                </Typography>

                            </Stack>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                Best Pathology Lab,
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                National Category
                            </Typography>
                        </Box>
                    </Card>
                    <Card variant="outlined" sx={{ maxWidth: 360, marginTop: '50px', width: '100%' }}>
                        <Box sx={{ p: 2, height: '26vh', backgroundColor: '#6C4675' }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    <VerifiedIcon sx={{ fontSize: '50px', color: 'white', marginTop: '25px' }} />
                                </Typography>

                            </Stack>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                NABL Accredited
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                Labs
                            </Typography>
                        </Box>
                    </Card>

                    <Card variant="outlined" sx={{ maxWidth: 360, marginTop: '50px', width: '100%' }}>
                        <Box sx={{ p: 2, height: '26vh', backgroundColor: '#6C4675' }}>
                            <Stack
                                direction="row"
                                sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                            >
                                <Typography gutterBottom variant="h5" component="div">
                                    <InsertDriveFileIcon sx={{ fontSize: '50px', color: 'white', marginTop: '25px' }} />
                                </Typography>

                            </Stack>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                Personalized
                            </Typography>
                            <Typography variant="h5" sx={{ color: 'white', fontWeight: '900' }}>
                                Friendly Rep
                            </Typography>
                        </Box>
                    </Card>

                </Box>
            </Box>

            <Box sx={{ marginTop: '50px' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', padding: '50px', gap: '20px', justifyContent: 'center' }}>

                    <Card sx={{ width: '30%', boxShadow: 'none', backgroundColor: '#E7FBF8' }}>


                        <Box sx={{ padding: '50px', height: '200px' }}>

                            <Typography variant="h5" sx={{ fontWeight: '700', color: 'black' }}>
                                What People Say
                            </Typography>
                            <Typography variant="h5" sx={{ fontWeight: '700', color: 'black' }}>
                                About us
                            </Typography>


                        </Box>

                        <Box sx={{ p: '30px' }}>
                            <Stack direction={'row'} spacing={2}>
                                <Avatar variant='rounded' sx={{ width: '50px', height: '50px', backgroundColor: 'gray' }}><NavigateBeforeIcon sx={{ fontSize: '50px' }} /></Avatar>
                                <Avatar variant='rounded' sx={{ width: '50px', height: '50px', backgroundColor: 'gray' }}><NavigateNextIcon sx={{ fontSize: '50px' }} /></Avatar>
                            </Stack>
                        </Box>
                    </Card>



                    <Card variant="outlined" sx={{ width: '30%' }}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: '40px', textAlign: 'justify', fontSize: '20px' }}>
                                I had very noticeable good experience with
                                you and your service.Presently there is lot
                                of skepticism in India for diagonstic tests.
                                In my opinion,Lupin Diagonstic will create
                                remarkable positive opinion for diagonstic
                                field in India
                            </Typography>


                        </Box>
                        <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
                        <Box sx={{ p: 2 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        alt=''
                                        src='https://mui.com/static/images/avatar/1.jpg'
                                        sx={{ width: 56, height: 56 }}>

                                    </Avatar>
                                }

                                title="Dr.Vijay Somani"
                                subheader="Pune"
                            />
                        </Box>
                    </Card>
                    <Card variant="outlined" sx={{ width: '30%' }}>
                        <Box sx={{ p: 2 }}>
                            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: '40px', textAlign: 'justify', fontSize: '20px' }}>
                                I had very noticeable good experience with
                                you and your service.Presently there is lot
                                of skepticism in India for diagonstic tests.
                                In my opinion,Lupin Diagonstic will create
                                remarkable positive opinion for diagonstic
                                field in India
                            </Typography>


                        </Box>
                        <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
                        <Box sx={{ p: 2 }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        alt=''
                                        src='https://mui.com/static/images/avatar/1.jpg'
                                        sx={{ width: 56, height: 56 }}>
                                    </Avatar>
                                }
                                title="Dr.Vijay Somani"
                                subheader="Pune"
                            />
                        </Box>
                    </Card>
                </Box>

            </Box>

            <Box sx={{ width: '100%', marginTop: '50px', display: 'flex', flexDirection: 'row', gap: '20px', paddingLeft: '50px' }}>

                <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '20px', marginRight: '250px' }}>Explore Lupin Diagonstics Videos</Typography>
                <Stack direction={'row'} spacing={2}>
                    <Avatar variant='rounded' sx={{ width: '30px', height: '30px', backgroundColor: 'gray' }}><NavigateBeforeIcon /></Avatar>
                    <Avatar variant='rounded' sx={{ width: '30px', height: '30px', backgroundColor: 'gray' }}><NavigateNextIcon /></Avatar>
                </Stack>
                <Button variant='outlined' color='#2CCE6C' size='large' sx={{ color: '#2CCE6C', textTransform: 'capitalize', fontSize: '10px' }}>View All</Button>
            </Box>
            <Box sx={{ padding: '50px', display: 'flex', flexDirection: 'row', gap: '20px', width: '100%', justifyContent: 'center' }}>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://www.pathvets.in/images/service-img1.jpg"
                            alt="diagonstics text"

                        />
                        <CardContent>
                            <Typography variant="body2">
                                Lupin Diagonstics backed with 50+ years of trust and care
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #6C4675' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>2 minutes 12 seconds</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://cdn.flabs.in/webassets/919397855f803d31f1d4.png"
                            alt="diagonstics text"
                        />
                        <CardContent>
                            <Typography variant="body2">
                                Lupin Diagonstics backed with 50+ years of trust and care
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #6C4675' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>2 minutes 12 seconds</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://media.licdn.com/dms/image/D5612AQGYficjTBdw3A/article-cover_image-shrink_720_1280/0/1688977713012?e=2147483647&v=beta&t=_8bu0xxH6yE_BdZfqX8FxGF6eoPfNJwIDSdFljn9e3I"
                            alt="diagonstics text"
                        />
                        <CardContent>
                            <Typography variant="body2">
                                Lupin Diagonstics backed with 50+ years of trust and care
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #6C4675' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>2 minutes 12 seconds</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://rapidlaboratory.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-13-at-12.38.37-PM-1.jpeg"
                            alt="diagonstics text"
                        />
                        <CardContent>
                            <Typography variant="body2">
                                Lupin Diagonstics backed with 50+ years of trust and care
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #6C4675' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>2 minutes 12 seconds</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>

            <Box sx={{ width: '100%', marginTop: '50px', display: 'flex', flexDirection: 'row', gap: '20px', paddingLeft: '50px' }}>

                <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize: '20px', marginRight: '350px' }}>Latest Blogs & Articles</Typography>
                <Stack direction={'row'} spacing={2}>
                    <Avatar variant='rounded' sx={{ width: '30px', height: '30px', backgroundColor: 'gray' }}><NavigateBeforeIcon /></Avatar>
                    <Avatar variant='rounded' sx={{ width: '30px', height: '30px', backgroundColor: 'gray' }}><NavigateNextIcon /></Avatar>
                </Stack>
                <Box sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Button variant='outlined' color='#2CCE6C' size='large' sx={{ color: '#2CCE6C', textTransform: 'capitalize', fontSize: '10px' }}>View All</Button>
                </Box>

            </Box>
            <Box sx={{ padding: '50px', display: 'flex', flexDirection: 'row', gap: '20px', width: '100%' }}>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea >
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://www.pathvets.in/images/service-img1.jpg"
                            alt="diagonstics text"

                        />
                        <CardContent>
                            <Typography variant="body2">
                                What are the Reasons for Increasing Cases for High Blood Pressure in Adults?
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>Posted on:13th August,2024</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://cdn.flabs.in/webassets/919397855f803d31f1d4.png"
                            alt="diagonstics text"
                        />
                        <CardContent>
                            <Typography variant="body2">
                                How Arthritis Blood Tests can Help Diagonse Your Condition?
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>Posted on:13th August,2024</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://media.licdn.com/dms/image/D5612AQGYficjTBdw3A/article-cover_image-shrink_720_1280/0/1688977713012?e=2147483647&v=beta&t=_8bu0xxH6yE_BdZfqX8FxGF6eoPfNJwIDSdFljn9e3I"
                            alt="diagonstics text"
                        />
                        <CardContent>
                            <Typography variant="body2">
                                What is the importance of the hemoglobin test and its range in overall health?
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>Posted on:13th August,2024</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: '25%' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image="https://rapidlaboratory.in/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-13-at-12.38.37-PM-1.jpeg"
                            alt="diagonstics text"
                        />
                        <CardContent>
                            <Typography variant="body2">
                                Erythrocyte sediment Rate(ESR) Test:know inflammation levels
                            </Typography>
                        </CardContent>
                        <Divider variant='middle' sx={{ border: '1px solid #2CCE6C' }} />
                        <CardContent>
                            <Typography sx={{ fontSize: '12px' }}>Posted on:13th August,2024</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>

            <Box sx={{ backgroundColor: '#FDF4FE', width: '100%', padding: '50px' }}>
                <Box >
                    <Typography variant='h5' sx={{ fontSize: '25px', fontWeight: '500', fontFamily: 'sans-serif' }}>
                        FAQs
                    </Typography>
                    <Box sx={{ padding:'50px' }}>
                        <Stack direction='row' spacing={2}>
                            <Button variant='contained' sx={{ backgroundColor: '#6C4675', textTransform: 'capitalize' }}>Topic 1</Button>
                            <Button variant='outlined' color='#6C4675' sx={{ color: '#6C4675', textTransform: 'capitalize' }}>Topic 2</Button>
                            <Button variant='outlined' color='#6C4675' sx={{ color: '#6C4675', textTransform: 'capitalize' }}>Topic 3</Button>
                        </Stack>
                    </Box>
                </Box>
                <Box sx={{ paddingLeft: '50px' }}>
                    <Accordion sx={{ width: '90%', padding: 2 }}>
                        <AccordionSummary sx={{ color: '#6C4675', fontWeight: '400' }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            How do I directly get connected with customer connect?
                        </AccordionSummary>
                        <AccordionDetails sx={{ fontSize: '12px', lineHeight: '20px' }}>
                            For additional information you can connect with us on our LupiConnect number 7070300400.You can
                            also visit<br /> our website www.lupindiagonstics.com for more details.
                        </AccordionDetails>
                    </Accordion>
                    <Accordion sx={{ width: '90%', marginTop: '20px', padding: 2 }}>
                        <AccordionSummary sx={{ fontSize: '15px' }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            What all services do we offer?
                        </AccordionSummary>

                    </Accordion>
                    <Accordion sx={{ width: '90%', marginTop: '20px', padding: 2 }}>
                        <AccordionSummary sx={{ fontFamily: 'sans-serif', fontSize: '15px' }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            When will I get my report?And how will I come to know that my report is ready
                        </AccordionSummary>

                    </Accordion>

                    <Accordion sx={{ width: '90%', marginTop: '20px', padding: 2 }}>
                        <AccordionSummary sx={{ fontFamily: 'sans-serif', fontSize: '15px' }}
                            expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#FDF4FE', color: '#6C4675' }} />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            Can I add my family members on my registered mobile number for availing diagonstics services?
                        </AccordionSummary>

                    </Accordion>
                </Box>

            </Box>

            <Box sx={{ backgroundColor: '#E5FEEF', width: '100%', padding: '50px' }}>   
                
                <Box>
                <Accordion sx={{ width: '90%', padding: 2, backgroundColor: '#E5FEEF', boxShadow: 'none' }}>

                    <AccordionSummary sx={{ color: '#6C4675', fontWeight: '400', fontSize: '20px', borderBottom: 'solid', borderBottomColor: '#00B32D' }}
                        expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#00B32D', color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Popular Tests

                    </AccordionSummary>

                    <AccordionDetails sx={{  display: 'flex', flexDirection: 'column' }}>
                       <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>
                        <Box sx={{width:'50%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Liver Function Test(LFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Calcium Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Allergy Test</Typography>
                        <hr/>
                        <Typography variant='body1'>HbAa1c Test</Typography>
                        </Box>

                    </AccordionDetails>

                </Accordion>
                </Box>

                <Box>
                <Accordion sx={{ width: '90%', padding: 2, backgroundColor: '#E5FEEF', boxShadow: 'none' }}>

                    <AccordionSummary sx={{ color: '#6C4675', fontWeight: '400', fontSize: '20px', borderBottom: 'solid', borderBottomColor: '#00B32D' }}
                        expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#00B32D', color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Popular Health Packages

                    </AccordionSummary>

                    <AccordionDetails sx={{  display: 'flex', flexDirection: 'column', borderBottomStyle:'none',boxShadow:'none' }}>
                       <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>LupiKavach Health Package-Orchid</Typography>
                        <hr/>
                        <Typography variant='body1'>LupiKavach Health Screen Package-Daisy</Typography>
                        <hr/>
                        <Typography variant='body1'>Lupikavach Pre Operative</Typography>
                        <hr/>
                        <Typography variant='body1'>LupiKavach Diabetic Screen</Typography>
                       
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>LupinKavach Vitamin Check</Typography>
                        <hr/>
                        <Typography variant='body1'>LupinKavach Diabetic Heart Screen</Typography>
                        <hr/>
                        <Typography variant='body1'>LupinKavach Health Screen package</Typography>
                        <hr/>
                        <Typography variant='body1'>Lupikavach Complete Diabetic Screen</Typography>
                                               
                        </Box>

                        <Box sx={{width:'50%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>LupiKavach Fever Check Gold</Typography>
                        <hr/>
                        <Typography variant='body1'>LupiKavach Healthy Women Package-Rose</Typography>
                        
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Health Checkups in Mumbai</Typography>
                        <hr/>
                        <Typography variant='body1'>Health Checkups in Pune</Typography>
                        <hr/>
                        <Typography variant='body1'>Health Checkups in Ranchi</Typography>
                        <hr/>
                        <Typography variant='body1'>Health Checkups in Kolkata</Typography>
                        <hr/>
                        <Typography variant='body1'>Health Checkups in Nashik</Typography>
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>

                        <Box sx={{width:'25%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'left',padding:'20px 0'}}>
                        <Typography variant='body1'>Liver Function Test(LFT)</Typography>
                        
                        
                        </Box>



                    </AccordionDetails>

                </Accordion>
                </Box>

                <Box>
                <Accordion sx={{ width: '90%', padding: 2, backgroundColor: '#E5FEEF', boxShadow: 'none' }}>

                    <AccordionSummary sx={{ color: '#6C4675', fontWeight: '400', fontSize: '20px', borderBottom: 'solid', borderBottomColor: '#00B32D' }}
                        expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#00B32D', color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Our Presence in Your City(Mumbai)

                    </AccordionSummary>

                    <AccordionDetails sx={{  display: 'flex', flexDirection: 'column', borderBottomStyle:'none',boxShadow:'none' }}>
                       <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>
                        

                    </AccordionDetails>

                </Accordion>
                </Box>

                <Box>
                <Accordion sx={{ width: '90%', padding: 2, backgroundColor: '#E5FEEF', boxShadow: 'none' }}>

                    <AccordionSummary sx={{ color: '#6C4675', fontWeight: '400', fontSize: '20px', borderBottom: 'solid', borderBottomColor: '#00B32D' }}
                        expandIcon={<ExpandMoreIcon sx={{ backgroundColor: '#00B32D', color: 'white' }} />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                    >
                        Our Presence in Other Cities

                    </AccordionSummary>

                    <AccordionDetails sx={{  display: 'flex', flexDirection: 'column', borderBottomStyle:'none',boxShadow:'none' }}>
                       <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>

                        <Box sx={{width:'100%',fontSize: '12px', gap:'30px', display: 'flex', flexDirection: 'row', justifyContent: 'center',padding:'20px 0'}}>
                        <Typography variant='body1'>Kideny Function Test(KFT)</Typography>
                        <hr/>
                        <Typography variant='body1'>Complete Blood Count Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Lipid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>Thyroid Profile Test</Typography>
                        <hr/>
                        <Typography variant='body1'>VitaminD Test</Typography>
                        <hr/>
                        <Typography variant='body1'>ViaminB12 Test</Typography>
                        <hr/>
                        </Box>


                    </AccordionDetails>

                </Accordion>
                </Box>

            </Box>

           <Box sx={{ backgroundColor: '#6C4675', width: '100%', height: '100vh' }}>    {/*  /*{Footer} */}
                <Box sx={{ color: 'white', padding: '50px'}}>
                 <Stack direction='row' spacing={2}>
                <img src='https://lupindiagnostics.com/assets/images/logo-white.png' height='55px' style={{marginRight:'550px'}}/>
                    <Typography variant='h5'>Contact Us:+91 7030 300 400</Typography>
                   
                    <Avatar variant="rounded" sx={{backgroundColor:"#9D65A8"}} >
                            <FacebookOutlinedIcon/>
                            
                        </Avatar>
                        <Avatar variant="rounded" sx={{backgroundColor:"#9D65A8"}} >
                            <Instagram/>
                        </Avatar>
                        <Avatar variant="rounded" sx={{backgroundColor:"#9D65A8"}} >
                            <X/>
                        </Avatar>
                        <Avatar variant="rounded" sx={{backgroundColor:"#9D65A8"}} >
                            <LinkedIn/>
                        </Avatar>
                        <Avatar variant="rounded" sx={{backgroundColor:"#9D65A8"}} >
                            <YouTube/>
                        </Avatar>
                        
                    </Stack>
                    
                </Box>
                <Divider variant='middle' sx={{border:'1px solid white'}}/> 
                <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
                <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>Book an Appointment</Typography>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>Book a Home Collection</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Book a Centre Visit</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Create Your Own Package</Typography>
            </Box>
            <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>Blood Tests & Packages</Typography>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>Lupikavach Health Packages</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Disease | Organ | Habit wise Tests</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Directory of Services(DOS)</Typography>
            </Box>
            <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>For Doctors</Typography>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>Pathology Core Facilities</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Knowledge Centre</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Doctor V-Logs</Typography>
            </Box>
            <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>Partner With Us</Typography>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>Lupimitra(Franchise)</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Lupi Plus</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Hospital Laboratory Management</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Retail Laboratory Management</Typography>
                
            </Box>
            </Box>
            <Box sx={{display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
            <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>About Us</Typography>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>About Lupin Diagnostics</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Why Lupin Diagnostics</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Our Management</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Our Doctors</Typography>
            </Box>
            <Box sx={{padding:'25px'}}>
                <br/><br/>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>Accrediations & Certifications</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Compliance</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Newsroom</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Logistics</Typography>
            </Box>
            <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>Contact Us</Typography>
                <Typography variant='body1' sx={{color:'white',fontSize:'15px',lineHeight:'250%'}}>Feedback</Typography>
                <Typography variant='body1' sx={{color:'white',lineHeight:'250%',fontSize:'15px'}}>Reach out to us</Typography>
                
            </Box>
            <Box sx={{padding:'25px'}}>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',fontWeight:'700',lineHeight:'250%'}}>Center Locator</Typography>
                <Typography variant='h5' sx={{color:'white',fontSize:'20px',lineHeight:'250%',fontWeight:'700'}}>Blogs</Typography>
                <Typography variant='h5' sx={{color:'white',lineHeight:'250%',fontSize:'20px',fontWeight:'700'}}>Careers</Typography>
                <Typography variant='h5' sx={{color:'white',lineHeight:'250%',fontSize:'20px',fontWeight:'700'}}>Informative Videos</Typography>
                
            </Box>
            </Box>
            <Divider variant='middle' sx={{border:'1px solid white'}}/> 
            <Box sx={{display:'flex',flexDirection:'row',padding:'25px',gap:'50px'}}>
            <Typography sx={{fontSize:'20px',color:'white',fontWeight:'700'}}>Terms of use</Typography>
            <Typography sx={{fontSize:'20px',color:'white',fontWeight:'700'}}>Pivacy Policy</Typography>
            <Typography sx={{fontSize:'20px',color:'white',fontWeight:'700'}}>Cookie Policy</Typography>
            
           </Box>
            </Box>
           



        </Box>
    )
}

export default SecondPage
