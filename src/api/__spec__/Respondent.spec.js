import Respondent from "../Repondent"
const Airtable = require('airtable');

describe('Respondent', () => {
    describe('fromGoogleAPI', () => {
        it('should extract googleId from google Api answer', () => {
            // given
            const googleApiAnswer = {
                "Ca": "103374552341423871156",
                "uc": {
                  "token_type": "Bearer",
                  "access_token": "ya29.ImC_B8DizVdaL_WIYcSQU7vk58CobUUZdJLQ64fsyiEsmquiWlUGdTWGh94V_544CMKaa40nZ5FbBp5G0H2i67_gUvL0mW9yAAMPKO5tGCW7NWvKbWr5MY_2aKx1pUm5V6o",
                  "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
                  "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAZmGgSKnLWO_L7VBrQfrRXM6AmI2LhYmUqWgITmuhSxhuDqKW0bmH60w-TsleGesIXqCj2Q",
                  "expires_in": 3599,
                  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5YzgwOWRkMTE4NmNjMjI4YzRiYWY5MzU4NTk5NTMwY2U5MmI0YzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzMzc0NTUyMzQxNDIzODcxMTU2IiwiZW1haWwiOiJjb250YWN0LmFkcmllbnNhdW5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1SXZ0R0pRVG1hbkhxNDR1VXJ0QVVBIiwibmFtZSI6IkFkcmllbiBTQVVOSUVSIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CVWRwc0hZVkpPRHhDeFYxUEhLY3AtcWQ2blRPNUhuSHM3YU1saEZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFkcmllbiIsImZhbWlseV9uYW1lIjoiU0FVTklFUiIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTgyNTc2NTM5LCJleHAiOjE1ODI1ODAxMzksImp0aSI6IjU1OTIwNzdmMjg4MDZlZDBkMTY1NGM5YjgwMTZmMzZiN2EzYzczZGYifQ.MFWhsoKV2VKXTPKKnXMjoqNrKHGC-PK71yBRkRSX4yUSpnkfEyq_lX70tzfCYIZrdRYAR8RQ4qN27W7S_IksBDiu9alAnW75rUA2m-oMDZ2Jwh6wgo_o7joKTIGAt3IfaVvvSiZaoooMrerfEdsWZHrQhfUfWqt35lzxA4CW2yr1vILz4uTpnis9t_4kOMkStP6e2jaO_YAzRZlXf9jdJypwG6J4lnX1B5V0qf6Y2mQ6pm-XjFvBLiwUT9qxGEtBWD0XOrTvw36RarOSEJaC7_NI0NzNUnqbO7VSzfxVbSz6-oDnZ_jLDnNcOZTX_j-tXWU-jHf-4HKnJ1kc-0sIjA",
                  "session_state": {
                    "extraQueryParams": {
                      "authuser": "0"
                    }
                  },
                  "first_issued_at": 1582576539311,
                  "expires_at": 1582580138311,
                  "idpId": "google"
                },
                "Qt": {
                  "SU": "103374552341423871156",
                  "Ad": "Adrien SAUNIER",
                  "vW": "Adrien",
                  "wU": "SAUNIER",
                  "UK": "https://lh3.googleusercontent.com/a-/AAuE7mBUdpsHYVJODxCxV1PHKcp-qd6nTO5HnHs7aMlhFw=s96-c",
                  "zu": "contact.adriensaunier@gmail.com"
                },
                "googleId": "103374552341423871156",
                "tokenObj": {
                  "token_type": "Bearer",
                  "access_token": "ya29.ImC_B8DizVdaL_WIYcSQU7vk58CobUUZdJLQ64fsyiEsmquiWlUGdTWGh94V_544CMKaa40nZ5FbBp5G0H2i67_gUvL0mW9yAAMPKO5tGCW7NWvKbWr5MY_2aKx1pUm5V6o",
                  "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
                  "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAZmGgSKnLWO_L7VBrQfrRXM6AmI2LhYmUqWgITmuhSxhuDqKW0bmH60w-TsleGesIXqCj2Q",
                  "expires_in": 3599,
                  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5YzgwOWRkMTE4NmNjMjI4YzRiYWY5MzU4NTk5NTMwY2U5MmI0YzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzMzc0NTUyMzQxNDIzODcxMTU2IiwiZW1haWwiOiJjb250YWN0LmFkcmllbnNhdW5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1SXZ0R0pRVG1hbkhxNDR1VXJ0QVVBIiwibmFtZSI6IkFkcmllbiBTQVVOSUVSIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CVWRwc0hZVkpPRHhDeFYxUEhLY3AtcWQ2blRPNUhuSHM3YU1saEZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFkcmllbiIsImZhbWlseV9uYW1lIjoiU0FVTklFUiIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTgyNTc2NTM5LCJleHAiOjE1ODI1ODAxMzksImp0aSI6IjU1OTIwNzdmMjg4MDZlZDBkMTY1NGM5YjgwMTZmMzZiN2EzYzczZGYifQ.MFWhsoKV2VKXTPKKnXMjoqNrKHGC-PK71yBRkRSX4yUSpnkfEyq_lX70tzfCYIZrdRYAR8RQ4qN27W7S_IksBDiu9alAnW75rUA2m-oMDZ2Jwh6wgo_o7joKTIGAt3IfaVvvSiZaoooMrerfEdsWZHrQhfUfWqt35lzxA4CW2yr1vILz4uTpnis9t_4kOMkStP6e2jaO_YAzRZlXf9jdJypwG6J4lnX1B5V0qf6Y2mQ6pm-XjFvBLiwUT9qxGEtBWD0XOrTvw36RarOSEJaC7_NI0NzNUnqbO7VSzfxVbSz6-oDnZ_jLDnNcOZTX_j-tXWU-jHf-4HKnJ1kc-0sIjA",
                  "session_state": {
                    "extraQueryParams": {
                      "authuser": "0"
                    }
                  },
                  "first_issued_at": 1582576539311,
                  "expires_at": 1582580138311,
                  "idpId": "google"
                },
                "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5YzgwOWRkMTE4NmNjMjI4YzRiYWY5MzU4NTk5NTMwY2U5MmI0YzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzMzc0NTUyMzQxNDIzODcxMTU2IiwiZW1haWwiOiJjb250YWN0LmFkcmllbnNhdW5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1SXZ0R0pRVG1hbkhxNDR1VXJ0QVVBIiwibmFtZSI6IkFkcmllbiBTQVVOSUVSIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CVWRwc0hZVkpPRHhDeFYxUEhLY3AtcWQ2blRPNUhuSHM3YU1saEZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFkcmllbiIsImZhbWlseV9uYW1lIjoiU0FVTklFUiIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTgyNTc2NTM5LCJleHAiOjE1ODI1ODAxMzksImp0aSI6IjU1OTIwNzdmMjg4MDZlZDBkMTY1NGM5YjgwMTZmMzZiN2EzYzczZGYifQ.MFWhsoKV2VKXTPKKnXMjoqNrKHGC-PK71yBRkRSX4yUSpnkfEyq_lX70tzfCYIZrdRYAR8RQ4qN27W7S_IksBDiu9alAnW75rUA2m-oMDZ2Jwh6wgo_o7joKTIGAt3IfaVvvSiZaoooMrerfEdsWZHrQhfUfWqt35lzxA4CW2yr1vILz4uTpnis9t_4kOMkStP6e2jaO_YAzRZlXf9jdJypwG6J4lnX1B5V0qf6Y2mQ6pm-XjFvBLiwUT9qxGEtBWD0XOrTvw36RarOSEJaC7_NI0NzNUnqbO7VSzfxVbSz6-oDnZ_jLDnNcOZTX_j-tXWU-jHf-4HKnJ1kc-0sIjA",
                "accessToken": "ya29.ImC_B8DizVdaL_WIYcSQU7vk58CobUUZdJLQ64fsyiEsmquiWlUGdTWGh94V_544CMKaa40nZ5FbBp5G0H2i67_gUvL0mW9yAAMPKO5tGCW7NWvKbWr5MY_2aKx1pUm5V6o",
                "profileObj": {
                  "googleId": "103374552341423871156",
                  "imageUrl": "https://lh3.googleusercontent.com/a-/AAuE7mBUdpsHYVJODxCxV1PHKcp-qd6nTO5HnHs7aMlhFw=s96-c",
                  "email": "contact.adriensaunier@gmail.com",
                  "name": "Adrien SAUNIER",
                  "givenName": "Adrien",
                  "familyName": "SAUNIER"
                }
              }

            // when
            const respondent = Respondent.fromGoogleAPI(googleApiAnswer)

            // then
            expect(respondent).toMatchObject({
                id: undefined,
                googleId: 103374552341423871156
            })
        })

        it('should extract name from google Api answer', () => {
            // given
            const googleApiAnswer = {
                "Ca": "103374552341423871156",
                "uc": {
                  "token_type": "Bearer",
                  "access_token": "ya29.ImC_B8DizVdaL_WIYcSQU7vk58CobUUZdJLQ64fsyiEsmquiWlUGdTWGh94V_544CMKaa40nZ5FbBp5G0H2i67_gUvL0mW9yAAMPKO5tGCW7NWvKbWr5MY_2aKx1pUm5V6o",
                  "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
                  "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAZmGgSKnLWO_L7VBrQfrRXM6AmI2LhYmUqWgITmuhSxhuDqKW0bmH60w-TsleGesIXqCj2Q",
                  "expires_in": 3599,
                  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5YzgwOWRkMTE4NmNjMjI4YzRiYWY5MzU4NTk5NTMwY2U5MmI0YzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzMzc0NTUyMzQxNDIzODcxMTU2IiwiZW1haWwiOiJjb250YWN0LmFkcmllbnNhdW5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1SXZ0R0pRVG1hbkhxNDR1VXJ0QVVBIiwibmFtZSI6IkFkcmllbiBTQVVOSUVSIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CVWRwc0hZVkpPRHhDeFYxUEhLY3AtcWQ2blRPNUhuSHM3YU1saEZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFkcmllbiIsImZhbWlseV9uYW1lIjoiU0FVTklFUiIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTgyNTc2NTM5LCJleHAiOjE1ODI1ODAxMzksImp0aSI6IjU1OTIwNzdmMjg4MDZlZDBkMTY1NGM5YjgwMTZmMzZiN2EzYzczZGYifQ.MFWhsoKV2VKXTPKKnXMjoqNrKHGC-PK71yBRkRSX4yUSpnkfEyq_lX70tzfCYIZrdRYAR8RQ4qN27W7S_IksBDiu9alAnW75rUA2m-oMDZ2Jwh6wgo_o7joKTIGAt3IfaVvvSiZaoooMrerfEdsWZHrQhfUfWqt35lzxA4CW2yr1vILz4uTpnis9t_4kOMkStP6e2jaO_YAzRZlXf9jdJypwG6J4lnX1B5V0qf6Y2mQ6pm-XjFvBLiwUT9qxGEtBWD0XOrTvw36RarOSEJaC7_NI0NzNUnqbO7VSzfxVbSz6-oDnZ_jLDnNcOZTX_j-tXWU-jHf-4HKnJ1kc-0sIjA",
                  "session_state": {
                    "extraQueryParams": {
                      "authuser": "0"
                    }
                  },
                  "first_issued_at": 1582576539311,
                  "expires_at": 1582580138311,
                  "idpId": "google"
                },
                "Qt": {
                  "SU": "103374552341423871156",
                  "Ad": "Adrien SAUNIER",
                  "vW": "Adrien",
                  "wU": "SAUNIER",
                  "UK": "https://lh3.googleusercontent.com/a-/AAuE7mBUdpsHYVJODxCxV1PHKcp-qd6nTO5HnHs7aMlhFw=s96-c",
                  "zu": "contact.adriensaunier@gmail.com"
                },
                "googleId": "103374552341423871156",
                "tokenObj": {
                  "token_type": "Bearer",
                  "access_token": "ya29.ImC_B8DizVdaL_WIYcSQU7vk58CobUUZdJLQ64fsyiEsmquiWlUGdTWGh94V_544CMKaa40nZ5FbBp5G0H2i67_gUvL0mW9yAAMPKO5tGCW7NWvKbWr5MY_2aKx1pUm5V6o",
                  "scope": "email profile https://www.googleapis.com/auth/userinfo.profile openid https://www.googleapis.com/auth/userinfo.email",
                  "login_hint": "AJDLj6JUa8yxXrhHdWRHIV0S13cAZmGgSKnLWO_L7VBrQfrRXM6AmI2LhYmUqWgITmuhSxhuDqKW0bmH60w-TsleGesIXqCj2Q",
                  "expires_in": 3599,
                  "id_token": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5YzgwOWRkMTE4NmNjMjI4YzRiYWY5MzU4NTk5NTMwY2U5MmI0YzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzMzc0NTUyMzQxNDIzODcxMTU2IiwiZW1haWwiOiJjb250YWN0LmFkcmllbnNhdW5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1SXZ0R0pRVG1hbkhxNDR1VXJ0QVVBIiwibmFtZSI6IkFkcmllbiBTQVVOSUVSIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CVWRwc0hZVkpPRHhDeFYxUEhLY3AtcWQ2blRPNUhuSHM3YU1saEZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFkcmllbiIsImZhbWlseV9uYW1lIjoiU0FVTklFUiIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTgyNTc2NTM5LCJleHAiOjE1ODI1ODAxMzksImp0aSI6IjU1OTIwNzdmMjg4MDZlZDBkMTY1NGM5YjgwMTZmMzZiN2EzYzczZGYifQ.MFWhsoKV2VKXTPKKnXMjoqNrKHGC-PK71yBRkRSX4yUSpnkfEyq_lX70tzfCYIZrdRYAR8RQ4qN27W7S_IksBDiu9alAnW75rUA2m-oMDZ2Jwh6wgo_o7joKTIGAt3IfaVvvSiZaoooMrerfEdsWZHrQhfUfWqt35lzxA4CW2yr1vILz4uTpnis9t_4kOMkStP6e2jaO_YAzRZlXf9jdJypwG6J4lnX1B5V0qf6Y2mQ6pm-XjFvBLiwUT9qxGEtBWD0XOrTvw36RarOSEJaC7_NI0NzNUnqbO7VSzfxVbSz6-oDnZ_jLDnNcOZTX_j-tXWU-jHf-4HKnJ1kc-0sIjA",
                  "session_state": {
                    "extraQueryParams": {
                      "authuser": "0"
                    }
                  },
                  "first_issued_at": 1582576539311,
                  "expires_at": 1582580138311,
                  "idpId": "google"
                },
                "tokenId": "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc5YzgwOWRkMTE4NmNjMjI4YzRiYWY5MzU4NTk5NTMwY2U5MmI0YzgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiNTQ2ODk3NDc2Mzc2LWRodW1pNmsyODZwaTRma2ZjcG04YzYycGxvaTlkYTkyLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAzMzc0NTUyMzQxNDIzODcxMTU2IiwiZW1haWwiOiJjb250YWN0LmFkcmllbnNhdW5pZXJAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJ1SXZ0R0pRVG1hbkhxNDR1VXJ0QVVBIiwibmFtZSI6IkFkcmllbiBTQVVOSUVSIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BQXVFN21CVWRwc0hZVkpPRHhDeFYxUEhLY3AtcWQ2blRPNUhuSHM3YU1saEZ3PXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6IkFkcmllbiIsImZhbWlseV9uYW1lIjoiU0FVTklFUiIsImxvY2FsZSI6ImVuLUdCIiwiaWF0IjoxNTgyNTc2NTM5LCJleHAiOjE1ODI1ODAxMzksImp0aSI6IjU1OTIwNzdmMjg4MDZlZDBkMTY1NGM5YjgwMTZmMzZiN2EzYzczZGYifQ.MFWhsoKV2VKXTPKKnXMjoqNrKHGC-PK71yBRkRSX4yUSpnkfEyq_lX70tzfCYIZrdRYAR8RQ4qN27W7S_IksBDiu9alAnW75rUA2m-oMDZ2Jwh6wgo_o7joKTIGAt3IfaVvvSiZaoooMrerfEdsWZHrQhfUfWqt35lzxA4CW2yr1vILz4uTpnis9t_4kOMkStP6e2jaO_YAzRZlXf9jdJypwG6J4lnX1B5V0qf6Y2mQ6pm-XjFvBLiwUT9qxGEtBWD0XOrTvw36RarOSEJaC7_NI0NzNUnqbO7VSzfxVbSz6-oDnZ_jLDnNcOZTX_j-tXWU-jHf-4HKnJ1kc-0sIjA",
                "accessToken": "ya29.ImC_B8DizVdaL_WIYcSQU7vk58CobUUZdJLQ64fsyiEsmquiWlUGdTWGh94V_544CMKaa40nZ5FbBp5G0H2i67_gUvL0mW9yAAMPKO5tGCW7NWvKbWr5MY_2aKx1pUm5V6o",
                "profileObj": {
                  "googleId": "103374552341423871156",
                  "imageUrl": "https://lh3.googleusercontent.com/a-/AAuE7mBUdpsHYVJODxCxV1PHKcp-qd6nTO5HnHs7aMlhFw=s96-c",
                  "email": "contact.adriensaunier@gmail.com",
                  "name": "Adrien SAUNIER",
                  "givenName": "Adrien",
                  "familyName": "SAUNIER"
                }
              }

            // when
            const respondent = Respondent.fromGoogleAPI(googleApiAnswer)

            // then
            expect(respondent).toMatchObject({
                name: "Adrien SAUNIER"
            })
        })
    })

    describe('fromAirtableAPI', () => {
        it('should map fields', () => {
            const rowRecord = {
                "_table": {
                    "_base": {
                        "_airtable": {
                            "requestTimeout": 300000
                        },
                        "_id": "appnV2TyVFjWTLjzh"
                    },
                    "id": null,
                    "name": "Respondent"
                },
                "id": "recMWTCjTTfw3Cuzr",
                "_rawJson": {
                    "id": "recMWTCjTTfw3Cuzr",
                    "fields": {
                        "Alias": "Adrien Saunier",
                        "GoogleId": 117983781347487940000,
                        "RecordId": "recMWTCjTTfw3Cuzr",
                        "CreatedAt": "2020-02-25T14:32:42.000Z"
                    },
                    "createdTime": "2020-02-25T14:32:42.000Z"
                },
                "fields": {
                    "Alias": "Adrien Saunier",
                    "GoogleId": 117983781347487940000,
                    "RecordId": "recMWTCjTTfw3Cuzr",
                    "CreatedAt": "2020-02-25T14:32:42.000Z"
                }
            }

            // given
            const airtableApiAnswer = new Airtable.Record('Respondent', 'recMWTCjTTfw3Cuzr', rowRecord)

            // when
            const respondent = Respondent.fromAirtableAPI(airtableApiAnswer)

            // then
            expect(respondent).toMatchObject({
                id: 'recMWTCjTTfw3Cuzr',
                googleId: 117983781347487940000,
                name: "Adrien Saunier"
            })
        })
    })
})
