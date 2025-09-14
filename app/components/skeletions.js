
import React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Skeleton from '@mui/joy/Skeleton';
import Typography from '@mui/joy/Typography';

export const Skell = () => {
    return <div className='bg-slate-500 animate-pulse  h-full w-full '>
    </div>
}

export const Projectskell = () => {
    const [loading, setLoading] = React.useState(true);
    return (
        <div className='flex flex-col gap-4'>
            <Card variant="outlined" className='w-[330px] h-[400px]'>
                <AspectRatio className="rounded-xl w-[300px] mb-5">
                    <Skeleton loading={loading} variant="overlay" className="rounded-xl w-full h-60">
                        <img
                            alt=""
                            src={'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='}
                        />
                    </Skeleton>
                </AspectRatio>
                <Typography>
                    <Skeleton loading={loading}>
                        {'Lorem ipsum is'}
                    </Skeleton>
                </Typography>
                <Typography>
                    <Skeleton loading={loading}>
                        {'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries.'}
                    </Skeleton>
                </Typography>
                <Button className="px-4 py-2 rounded-full w-28">
                </Button>
            </Card>
        </div>
    );
}

export const Paytopicskell = () => {
    return <div className='flex flex-col gap-3 '>
        <div className='h-12 w-[40%] bg-slate-500 animate-pulse '></div>
        <div className='w-[90%] h-5 bg-slate-500 animate-pulse '></div>
        <div className='w-[94%] h-5 bg-slate-500 animate-pulse '></div>
        <div className='w-[70%] h-5 bg-slate-500 animate-pulse '></div>
    </div>
}