import React from 'react';
import SuccessImages from '../../assets/SuccessImages.png';
import { BsHandThumbsUp } from "react-icons/bs";

const successPageStyles = {
    backgroundContainer: {
        position: 'relative',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        marginTop: '70px',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        position: 'absolute',
        zIndex: '-1',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    text: {
        color: '#fff',
        fontSize: '24px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
    },
};

function SuccessPage() {
    return (
        <div style={successPageStyles.backgroundContainer}>
            <div style={successPageStyles.backgroundImage}>
                <img style={successPageStyles.image} src={SuccessImages} alt='ultimates-solution-llc' />
            </div>
            <div style={successPageStyles.text}>
                <h1 style={{fontWeight: "Bold"}}>Thank You <BsHandThumbsUp style={{marginLeft: "1rem", marginTop: "-5px"}} /></h1>
                <p>Success! Your message has been delivered and received.</p>
            </div>
        </div>
    );
}

export default SuccessPage;
