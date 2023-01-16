import React, { useState, useEffect, useMemo } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import HorizontalScrollbar from './HorizontalScrollbar'

import {exerciseOptions} from '../utils/fetchDataYoutube'
import { useQuery } from 'react-query'
import Loader from "./Loader"

import fetchData from '../utils/fetchDataWithAxios'

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {

  const [bodyParts, setBodyParts] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData("/bodyPartList")

      setBodyParts(['All', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  function handleKeyDown(event) {
    const { code } = event
    if(code === "Enter" || code === "NumpadEnter") {
      handleSearch()
    }
  }

  async function handleSearch() {
    if(search) {
      setIsLoading(true)
      const exercisesData = await fetchData()
      const searchedExercises = exercisesData.filter((exercise) => exercise.name.toLowerCase().includes(search)
      || exercise.target.toLowerCase().includes(search)
      || exercise.equipment.toLowerCase().includes(search)
      || exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("")
      setExercises(searchedExercises)
      setIsLoading(false)
    }
  }
  
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: {lg: '44px', xs: '30px' }}} mb="50px" textAlign="center">
        Awesome Exercises You <br/> Should Know
      </Typography>

      

      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: { fontWeight: "700",
          border: "none",
          borderRadius: "4px"},
          width: { lg: "800px", xs: "100%"},
          backgroundColor: "#FFF",
          borderRadius: "40px"
        }}
        height="76px"
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase())}
        onKeyDown={(event) => handleKeyDown(event)}
        placeholder="Search Exercises"
        type="text"
        />
        <Button 
        onClick={handleSearch}
        className="search-btn"
        sx={{
          bgcolor: "#FF2625",
          color: "#FFF",
          textTransform: "none",
          width: { lg: "175px", xs: "100px"},
          fontSize: {lg: "20px", xs: "14px"},
          height: "56px",
          position: "absolute",
          right: "0"
        }}
        >
          Search
        </Button>

        <Typography fontSize="12px" align='center' mt={2}>You can search for a specific muscle group, equipment required, name of exercise or the target muscle.</Typography>

        { isLoading ? <Loader /> : ""}

      </Box>

      <Box
      sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>

      </Box>
    </Stack>
  )
}

export default SearchExercises