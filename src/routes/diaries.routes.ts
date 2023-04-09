import express from 'express'
import { getEntries } from '../services'
import {
  genericResponse,
  genericResponseError
} from '../utilities/generic-response.utility'
import { Entry } from '../models/entries.model'

const router = express.Router()

router.get('/', (_req, res) => {
  const entries = getEntries()

  if (entries.length > 0) {
    return res.status(400).send(
      genericResponseError<string>({
        ok: false,
        message: 'No entries found',
        error: 'No entries found - generic'
      })
    )
  } else {
    return res.status(200).send(
      genericResponse<Entry[]>({
        data: entries,
        message: 'Getting all diaries',
        ok: true
      })
    )
  }
})

router.post('/', (_req, res) => {
  res.status(200).send({
    ok: true,
    message: 'Adding a new diary'
  })
})

export default router
