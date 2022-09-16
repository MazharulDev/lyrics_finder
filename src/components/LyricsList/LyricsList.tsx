import { Button, Card, CardActions, CardContent, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import LyricsType from '../../types/models';



const LyricsList = () => {
    const [Lyrics, setLyrics] = useState<LyricsType[]>([]);
    console.log(Lyrics);
    useEffect(() => {
        fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=20&country=us&f_has_lyrics=1&apikey=237d5d86270eff9d001af5d3e4a2364b`)
            .then(res => res.json())
            .then(data => setLyrics(data.message.body.track_list))
    }, [])
    return (
        <Grid container spacing={3} sx={{ marginTop: "20px", }}>


            {
                Lyrics.map(lyric =>
                    <Grid key={lyric.track.album_id} item xs={3}>
                        <Box>
                            <Card sx={{ minWidth: 275 }}>
                                <CardContent>
                                    <Typography gutterBottom>
                                        <Typography variant='h6' color="blueviolet">{lyric.track.track_name} </Typography> <Typography>By</Typography> <Typography color="text.seceondary">{lyric.track.artist_name}</Typography>
                                    </Typography>
                                    <Typography>Album Name: {lyric.track.album_name}</Typography>
                                    <CardActions>
                                        <Link href={lyric.track.track_share_url} underline="hover">
                                            {"Show Lyrics"}
                                        </Link>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Box>
                    </Grid>
                )
            }


        </Grid>
    );
};

export default LyricsList;