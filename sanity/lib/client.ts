import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:"skHu0FWdtzzVTjNpAvv7kNl1NDx0fyfviQpllqetmQc0tCbDuFO7mFCVu5AlUdrrJuRSJEMCYbWleXeUDgbYXnHxn8I2Sv2h8542NsHqfN3FklnujhSDSXs1AzmfF1FXiWTJMnsDA4LE7EeRUOU7yJ6vkaLIuCaskVAc79Tl60gJqoAcJcDl",
  stega: { enabled: encodeSourceMap },
})
