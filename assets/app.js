// assets/app.js
import { registerReactControllerComponents } from '@symfony/ux-react';

// Registers React controller components to allow loading them from Twig
//
// React controller components are components that are meant to be rendered
// from Twig. These component then rely on other components that won't be called
// directly from Twig.
//
// By putting only controller components in `react/controllers`, you ensure that
// internal components won't be automatically included in your JS built file if
// they are not necessary.

import './styles/app.css';
import './bootstrap';

registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));
