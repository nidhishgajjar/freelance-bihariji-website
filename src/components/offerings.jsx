import React, { useState, useMemo } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ssImage from '../assets/ss.jpg';
import mpImage from '../assets/mp.jpg';
import coilImage from '../assets/coil.jpg';
import colorpImage from '../assets/colorp.jpg';
import pgpImage from '../assets/pgp.jpg';
import msImage from '../assets/ms.jpg';

const Offerings = () => {

    const products = useMemo(() => [
        { 
            name: 'PRE-GALVANIZED (G.P PIPES & G.I PIPES)', 
            description: 'Pipes are made of carbon steel. These pipes are “hot dipped” in galvanized bath (hot galvanizing) with pipe ends are fully capped. The galvanizing is only on outside. Galvanizing is all about zinc coating, which offers better corrosion resistance than actual carbon steel.',
            image: pgpImage 
        },
        { name: 'M.S PATTI & COIL PIPES', description: 'As MS Pipes are made from mild steel they can easily be welded and formed in various shapes and sizes for pipelining and tubing purposes. These are generally used for drinking water supply i.e. Plumbing, Firefighting, HVAC but can also be used in various other Industrial and Engineering applications.', image: mpImage },
        { name: 'G.I COILS & SHEETS', description: 'Galvanized iron (GI) sheets are basically steel sheets which have been coated with zinc. These sheets include a range of hot dip galvanized and electro-galvanized steel sheet. It reacts with the atmosphere to provide the base steel a protection', image: coilImage },
        { name: 'COLOR COATED SHEETS', description: 'The color coated roofing sheets are used in place of galvanized iron sheets in residential buildings to provide better aesthetic look. Moreover, unlike traditional coating sheets, these sheets have a strong base of steel metals. These color coated steel metals can be copper, aluminum, zinc-aluminum, and tin.', image: colorpImage },
        { name: 'STRUCTURAL STEEL (Angle, Channel, Beam)', description: 'These pipes are widely used for conveying raw water & distribution of treated water in majority of rural water supply schemes, where the requirement of water is less. Mostly medium quality GI pipes are used. These pipes are cheap, light in weight and easy to handle & transport & easy to join.', image: ssImage },
        { name: 'M.S PLATE & CHEQUER PLATE', description: 'Mild Steel (MS) Plate is a steel plate used for construction. It is flexible, not brittle and it is the most common form of steel. MS plates are used to give strength to a concrete cement in a building or any structural works. It is also used for construction and industrial applications.', image: msImage },
    ], []);

    const [open, setOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [viewAll, setViewAll] = useState(false);

    const openDialog = (product) => {
        setSelectedProduct(product);
        setOpen(true);
    };

    const toggleViewAll = () => {
        setViewAll(prevViewAll => !prevViewAll);
    }

    return (
        <div id="offerings" className="offerings-section bg-gray-50 p-4 py-28 rounded-lg">
            <Typography variant="h2" mb={2} textAlign="center">
                Our Products
            </Typography>
            <div className="grid grid-cols-28 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 gap-10 p-10 items-center justify-center">
                {products.slice(0, viewAll ? products.length : 4).map((product, index) => (
                    <Card 
                        key={index} 
                        className="hover:shadow-xl transition-shadow duration-300 cursor-pointer rounded-lg p-4 mx-auto" 
                        sx={{ width: { xs: '300px', md: '90%' }, height: '250px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', mx: 2 }} 
                        onClick={() => openDialog(product)}
                    >
                        <Box 
                            sx={{ 
                                height: '140px', 
                                width: '100%', 
                                borderRadius: '12px 12px 0 0', 
                                backgroundImage: `url(${product.image})`, 
                                backgroundSize: 'cover', 
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                        </Box>
                        <CardContent sx={{ height: '100px', overflow: 'hidden' }}>
                            <Typography gutterBottom variant="h6" pt={2} pb={-2} component="div">
                                {product.name}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>


            <button onClick={toggleViewAll} className="mt-12 bg-gray-800 text-white py-2 px-4 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                {viewAll ? 'Show Less' : 'View All'}
            </button>

            <Transition appear show={open} as={React.Fragment}>
                <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={setOpen}>
                    <div className="min-h-screen px-4 text-center">
                        <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
                        <span className="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>
                        <Transition.Child as={React.Fragment} enter="ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    {selectedProduct?.name}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        {selectedProduct?.description}
                                    </p>
                                </div>
                                <div className="mt-4">
                                    <button type="button" className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500" onClick={() => setOpen(false)}>
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

export default Offerings;
