import { setupWorker } from 'msw/browser'
import { signInMock } from './sign-in-mock'

export const worker = setupWorker(signInMock)

export async function enablwMSW() {
  if(import.meta.env.MODE !== 'test') {
    return
  }
  await worker.start()
}