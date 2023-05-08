import { Paper, TableBody, TableCell, TableContainer, TableHead, TableRow, Table } from '@mui/material'
import React, { useEffect, useState } from 'react'




const Passengers = () => {
    const [posts,setPosts]=useState([])
  
    useEffect(() => {
      fetch('https://api.instantwebtools.net/v1/passenger')
        .then(res => res.json())
        .then(data => {
          setPosts(data)
          console.log(data)
        })
    }, [])
   
  return (
    <>
     <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Trips</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow
              key={post.data?._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{post.data?._id}</TableCell>
              <TableCell align="right">{post.data?.name}</TableCell>
              <TableCell align="right">{post.data?.trips}</TableCell>      
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default Passengers