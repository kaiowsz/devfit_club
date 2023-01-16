import React from 'react'
import { Typography, Stack, Button } from "@mui/material"

import BodyPartImage from "../assets/icons/body-part.png"
import TargetImage from "../assets/icons/target.png"
import EquipmentImage from "../assets/icons/equipment.png"
 
const Detail = ({ exerciseDetail }) => {

    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart,
        },
        {
            icon: TargetImage,
            name: target,
        },
        {
            icon: EquipmentImage,
            name: equipment,
        }
    ]

    return (
        <Stack gap="60px" sx={{flexDirection: { lg: "row"}, p: "20px", alignItems: "center"}}>
            <img src={gifUrl} alt={`${name} gif`} loading="lazy" className='detail-image' />
            <Stack sx={{gap: { lg: "35px", xs: "20px"}}}>
                <Typography variant="h3">
                    <strong style={{lineHeight: "65px"}}>{name}</strong>
                </Typography>
                <Typography variant="h6">
                    Exercises keep you strong. <strong>{name}</strong> { ' '}

                    is one of the best exercises to target your <strong>{target}</strong>. It will help you

                    improve your mood and gain energy.

                </Typography>
                {extraDetail.map((item) => (
                    <Stack key={item.name} direction="row" gap="24px" alignItems="center">
                        <Button sx={{ background: "#FFF2DB", borderRadius: "50%", width: "100px", height: "100px" }}>
                            <img src={item.icon} alt={item.name} style={{ width: "50px", height: "50px"}}/>
                        </Button>
                        <Typography variant="h5">
                            <span>{item.name}</span>
                        </Typography>

                    </Stack>
                ))}
            </Stack>

        </Stack>
    )
}

export default Detail