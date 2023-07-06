import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import languages from '../languages';
import api from '../api'
import './style.css'

export default function Search(props) {
  const [getResult, setResult] = useState('')
  const [getSrcValue, setSrcValue] = useState({ 'name': '', 'code': '' });
  const [getTgtValue, setTgtValue] = useState({ 'name': '', 'code': '' });

  const getTranslate = (source, target) => {
    const searchTerm = document.getElementById("search_bar").value
    if (searchTerm !== '' && target !== '' && source !== '') {
      const encodedParams = new URLSearchParams();
      encodedParams.append("source_language", source);
      encodedParams.append("target_language", target);
      encodedParams.append("text", searchTerm);

      const url = api.apiSearch.url.translate.endpoint

      api.options.body = encodedParams
      api.options.headers['X-RapidAPI-Host'] = api.apiSearch.url.translate['X-RapidAPI-Host']

      fetch(url, api.options)
        .then(res => res.json())
        .then(json => setResult(json.data.translatedText))
        .catch(err => console.error('error:' + err));
    }
  }

  return (
    <div className="searchMenu">
      <div className="search">
        <div className="lang">
          <Autocomplete
            id="highlights-demo"
            onChange={(event, newValue) => {
              setSrcValue(newValue);
            }}
            sx={{ width: 200 }}
            options={languages.list}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label={ getSrcValue.name !== '' ? getSrcValue.name : 'Source' }
                margin="normal"
              />
            )}
            renderOption={(props, option, { inputValue }) => {
              const matches = match(option.name, inputValue, { insideWords: true });
              const parts = parse(option.name, matches);

              return (
                <li {...props}>
                  <div>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                      >
                        {part.text}
                      </span>
                    ))}
                  </div>
                </li>
              );
            }}
          />
          <Autocomplete
            id="highlights-demo"
            onChange={(event, newValue) => {
              setTgtValue(newValue);
            }}
            sx={{ width: 200 }}
            options={languages.list}
            getOptionLabel={(option) => option.name}
            renderInput={(params) => (
              <TextField {...params} label="Target" margin="normal" />
            )}
            renderOption={(props, option, { inputValue }) => {
              const matches = match(option.name, inputValue, { insideWords: true });
              const parts = parse(option.name, matches);

              return (
                <li {...props}>
                  <div>
                    {parts.map((part, index) => (
                      <span
                        key={index}
                        style={{
                          fontWeight: part.highlight ? 700 : 400,
                        }}
                      >
                        {part.text}
                      </span>
                    ))}
                  </div>
                </li>
              );
            }}
          />
        </div>
        <input
          placeholder={props.text}
          className="searchBar"
          id="search_bar"
          onChange={() => (
            getTranslate(getSrcValue.code, getTgtValue.code)
          )
          }
        />
      </div>
      {getResult !== '' ?
        <div className="search">
          <input
            className="result"
            id="result"
            disabled
            value={getResult !== '' ? (getResult) : 'Result will display here'}
          /><br /><br />
        </div>
        :
        ''
      }
    </div>
  )
}