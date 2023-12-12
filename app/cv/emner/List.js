import React from "react";
import { Box, Paper } from "@/lib/mui";
import { Title } from "$/Components";
import { chango } from "$/fonts";

const List = ({ info }) => {

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            mt: 2
        }}>
            <Paper elevation={4} sx={{
                display: 'flex',
                backgroundColor: 'transparent',
                width: '95%',
                justifyContent: 'center',
                flexDirection: 'column'
            }}>
                {info?.map((it, i) => {
                    return (
                        <Box key={i} sx={{ textAlign: 'center', textShadow: '-1px 0px 0px black' }}>
                            <Title className={chango.className} color='#e1c043' size={10}>{it}</Title>
                        </Box>
                    )
                })}
            </Paper>
        </Box>
    );
};

export default List;