import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Box } from "@mui/material"

import Detail from "../components/Detail"
import ExerciseVideos from "../components/ExerciseVideos"
import SimilarExercises from "../components/SimilarExercises"

import fetchData from "../utils/fetchDataWithAxios"

import fetchDataYT, {youtubeOptions} from "../utils/fetchDataYoutube"

const ExerciseDetail = () => {

  const [exerciseDetail, setExerciseDetail] = useState({})
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([])
  const [equipmentExercises, setEquipmentExercises] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com"

      const exerciseDetailData = await fetchData(`/exercise/${id}`)
      setExerciseDetail(exerciseDetailData)

      const exerciseVideosData = await fetchDataYT(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)

      const targetMuscleExerciseData = await fetchData(`/target/${exerciseDetailData.target}`)
      setTargetMuscleExercises(targetMuscleExerciseData)
      console.log(targetMuscleExercises)

      const equipmentExerciseData = await fetchData(`/equipment/${exerciseDetailData.equipment}`)
      setEquipmentExercises(equipmentExerciseData)
      console.log(equipmentExercises)

    }
    fetchExercisesData()
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name}/>
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>

    </Box>
  )
}

export default ExerciseDetail