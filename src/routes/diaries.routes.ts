import express from 'express'
import {
  addEntry,
  getById,
  getEntries,
  getEntriesWithoutSensitiveData
} from '../services'
import {
  genericResponse,
  genericResponseError
} from '../utilities/generic-response.utility'
import { Entry, NoSensitiveDiaryEntry } from '../models/entries.model'
import { toNewDiaryEntryAdapter } from '../adapter'

const router = express.Router()

router.get('/', (_req, res) => {
  const entries = getEntries()
  return res.status(400).send(
    genericResponse<Entry[]>({
      data: entries
    })
  )
})

router.get('/no-sensitive-data', (_req, res) => {
  const entries = getEntriesWithoutSensitiveData()
  return res.status(400).send(
    genericResponse<NoSensitiveDiaryEntry[]>({
      message: "This method doesn't return sensitive data with Omit<T, K>",
      data: entries
    })
  )
})

router.get('/:id', (req, res) => {
  const id = +req.params.id
  const entry = getById(id)
  if (entry !== undefined) {
    return res.status(200).send(
      genericResponse<Entry>({
        message: `Entry with id ${id} found`,
        data: entry
      })
    )
  }
  return res.status(404).send(
    genericResponseError<string>({
      ok: false,
      message: `Entry with id ${id} not found`
    })
  )
})

router.post('/', (req, res) => {
  try {
    const requestEntry = toNewDiaryEntryAdapter(req.body)
    const entryAdded = addEntry(requestEntry)
    res.status(200).send({
      ok: true,
      message: `Entry added successfully with id ${entryAdded.id}`,
      data: entryAdded
    })
  } catch (error: any) {
    res.status(400).send(
      genericResponseError<string>({
        ok: false,
        message: error.message
      })
    )
  }
})

export default router
