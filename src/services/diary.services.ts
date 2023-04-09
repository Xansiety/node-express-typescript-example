import { Entries } from '../data'
import {
  CreateNewEntry,
  Entry,
  NoSensitiveDiaryEntry
} from '../models/entries.model'
import { v4 as uuidv4 } from 'uuid'

export const getEntries = (): Entry[] => {
  return Entries
}

export const getEntriesWithoutSensitiveData = (): NoSensitiveDiaryEntry[] => {
  return Entries.map(({ comment, ...entry }) => entry)
}

export const getById = (id: number): Entry | undefined => {
  const entry = Entries.find((entry) => entry.id === id.toString())
  return entry
}

export const addEntry = (newEntry: CreateNewEntry): Entry => {
  const EntryAdded = {
    id: uuidv4(),
    ...newEntry
  }
  Entries.push(EntryAdded)
  return EntryAdded
}
