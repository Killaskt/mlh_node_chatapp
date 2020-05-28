import React, { useState, useEffect } from 'react';
import querystring from 'query-string';

// useeffect allows you to set up side effects for your components (similar to componentDidMount (first render) and componentDidUpdate (every render after))
// we need to cleanup (componentDidUnmount) after -- disconnect in our case

// socket.io logic
import io from 'socket.io-client';

let socket;