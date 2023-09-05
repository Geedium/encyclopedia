interface Props {
    width?: number;
    height?: number;
}

export default function Logo({ width = 200, height = 120 }: Props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width={width}
            zoomAndPan="magnify"
            viewBox="0 0 150 89.999999"
            height={height}
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
        >
            <defs>
                <g />
                <clipPath id="d2531ad275">
                    <path
                        d="M 40 54 L 49.5 54 L 49.5 69 L 40 69 Z M 40 54 "
                        clipRule="nonzero"
                    />
                </clipPath>
                <clipPath id="07074ee6f5">
                    <path
                        d="M 9 22 L 49.5 22 L 49.5 71.707031 L 9 71.707031 Z M 9 22 "
                        clipRule="nonzero"
                    />
                </clipPath>
            </defs>
            <g clipPath="url(#d2531ad275)">
                <path
                    fill="#38b6ff"
                    d="M 42.714844 68.367188 L 49.5 63.25 L 49.5 54.550781 C 42.613281 54.859375 38.464844 62.738281 42.714844 68.367188 Z M 42.714844 68.367188 "
                    fillOpacity="1"
                    fillRule="nonzero"
                />
            </g>
            <g clipPath="url(#07074ee6f5)">
                <path
                    fill="#38b6ff"
                    d="M 11.429688 38.789062 L 49.5 38.789062 C 44.335938 19.855469 17.707031 18.726562 11.429688 37.152344 L 11.328125 22.207031 L 9 22.207031 L 9 63.351562
            L 11.328125 63.351562 L 17.808594 68.46875 C 21.960938 62.945312 18.214844 54.960938 11.328125 54.753906 L 11.328125 52.402344 C 20.136719 52.605469
            24.996094 62.839844 19.632812 69.902344 L 21.554688 71.4375 L 26.3125 71.4375 L 28.339844 51.992188 L 32.1875 51.992188 L 34.210938 71.4375 L
            38.96875 71.4375 L 40.894531 69.902344 C 35.425781 62.636719 40.691406 52.503906 49.5 52.402344 L 49.5 40.734375 L 11.429688 40.734375 Z M 35.730469
            42.679688 L 44.335938 42.679688 C 45.449219 42.679688 46.261719 43.597656 46.261719 44.621094 C 46.261719 48.101562 43.425781 50.96875 39.984375
            50.96875 C 38.261719 50.96875 36.742188 50.253906 35.527344 49.125 C 34.414062 48 33.703125 46.363281 33.703125 44.621094 C 33.804688 43.597656 34.71875 42.679688 35.730469 42.679688 Z M 16.289062 42.679688 L 24.894531 42.679688 C 26.011719 42.679688 26.820312 43.597656 26.820312 44.621094 C 26.820312 46.363281 26.109375 47.898438 24.996094 49.125 C 23.882812 50.253906 22.265625 50.96875 20.542969 50.96875 C 17.101562 50.96875 14.265625 48.101562 14.265625 44.621094 C 14.265625 43.597656 15.175781 42.679688 16.289062 42.679688 Z M 16.289062 42.679688 "
                    fillOpacity="1"
                    fillRule="nonzero"
                />
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(56.800639, 45.725225)">
                    <g>
                        <path d="M 1.890625 -13.707031 L 1.699219 -12.316406 C 1.46875 -10.773438 1.3125 -9.769531 1.234375 -9.265625 L 1.234375 -8.804688 C 1.234375 -8.1875 1.390625 -7.761719 1.621094 -7.492188 C 1.929688 -7.21875 2.433594 -7.027344 3.203125 -6.949219 C 3.667969 -6.910156 4.441406 -6.875 5.484375 -6.875 L 14.941406 -6.875 C 14.90625 -6.527344 14.867188 -6.292969 14.828125 -6.140625 C 14.828125 -5.945312 14.75 -5.792969 14.671875 -5.675781 C 14.597656 -5.597656 14.480469 -5.523438 14.324219 -5.484375 C 14.210938 -5.484375 13.902344 -5.445312 13.4375 -5.445312 L 0.734375 -5.445312 C 0.503906 -3.746094 0.386719 -2.664062 0.386719 -2.125 C 0.386719 -1.542969 0.464844 -1.121094 0.65625 -0.8125 C 0.886719 -0.539062 1.234375 -0.347656 1.699219 -0.191406 C 2.238281 -0.117188 3.476562 -0.0390625 5.484375 -0.0390625 L 13.976562 -0.0390625 C 15.945312 -0.0390625 17.222656 -0.117188 17.761719 -0.191406 C 18.339844 -0.347656 18.765625 -0.578125 19.074219 -0.886719 C 19.304688 -1.195312 19.460938 -1.582031 19.617188 -2.085938 C 19.769531 -2.625 20 -3.746094 20.234375 -5.445312 L 20.425781 -6.875 C 20.621094 -8.417969 20.734375 -9.421875 20.734375 -9.886719 L 20.734375 -10.117188 C 20.734375 -10.8125 20.621094 -11.3125 20.347656 -11.621094 C 20.078125 -11.929688 19.539062 -12.164062 18.6875 -12.242188 C 18.226562 -12.316406 17.222656 -12.316406 15.675781 -12.316406 L 7.183594 -12.316406 C 7.257812 -12.742188 7.296875 -13.011719 7.296875 -13.128906 C 7.335938 -13.28125 7.375 -13.398438 7.453125 -13.476562 C 7.53125 -13.59375 7.683594 -13.667969 7.839844 -13.667969 C 7.992188 -13.707031 8.378906 -13.707031 8.917969 -13.707031 L 16.488281 -13.707031 C 17.722656 -13.707031 18.613281 -13.746094 19.074219 -13.824219 C 19.617188 -13.902344 20 -13.976562 20.3125 -14.132812 C 20.851562 -14.402344 21.238281 -14.90625 21.46875 -15.636719 C 21.660156 -16.179688 21.894531 -17.375 22.125 -19.152344 L 7.800781 -19.152344 C 6.410156 -19.152344 5.445312 -19.152344 4.902344 -19.074219 C 4.207031 -18.996094 3.707031 -18.84375 3.359375 -18.574219 C 2.972656 -18.265625 2.664062 -17.761719 2.472656 -16.988281 C 2.316406 -16.449219 2.125 -15.367188 1.890625 -13.707031 Z M 1.890625 -13.707031 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(78.732933, 45.725225)">
                    <g>
                        <path d="M 7.335938 -27.066406 C 7.722656 -26.757812 7.992188 -26.566406 8.109375 -26.410156 C 8.339844 -26.257812 8.457031 -26.0625 8.535156 -25.910156 C 8.609375 -25.792969 8.609375 -25.640625 8.609375 -25.445312 C 8.609375 -25.332031 8.609375 -25.097656 8.570312 -24.710938 L 7.800781 -19.152344 L 6.988281 -19.152344 C 5.871094 -19.152344 5.058594 -19.152344 4.554688 -19.074219 C 3.898438 -18.996094 3.398438 -18.84375 3.011719 -18.613281 C 2.585938 -18.300781 2.238281 -17.683594 2.007812 -16.71875 C 1.929688 -16.257812 1.777344 -15.253906 1.542969 -13.746094 L 7.027344 -13.746094 L 6.835938 -12.316406 L 6.0625 -6.875 L 5.871094 -5.484375 C 5.636719 -4.054688 5.484375 -3.089844 5.40625 -2.585938 L 5.40625 -1.96875 C 5.40625 -1.507812 5.484375 -1.121094 5.636719 -0.847656 C 5.871094 -0.503906 6.332031 -0.269531 7.027344 -0.15625 C 7.566406 -0.078125 8.6875 -0.0390625 10.347656 -0.0390625 L 13.824219 -0.0390625 C 15.445312 -0.0390625 16.527344 -0.078125 17.066406 -0.15625 C 17.761719 -0.269531 18.265625 -0.464844 18.574219 -0.773438 C 18.882812 -1.082031 19.152344 -1.582031 19.304688 -2.238281 C 19.460938 -2.78125 19.617188 -3.859375 19.847656 -5.484375 L 11.351562 -5.484375 L 11.546875 -6.875 L 12.316406 -12.316406 L 12.511719 -13.746094 L 15.523438 -13.746094 C 17.222656 -13.746094 18.300781 -13.785156 18.84375 -13.824219 C 19.460938 -13.902344 19.886719 -14.054688 20.195312 -14.25 C 20.65625 -14.558594 21.003906 -15.058594 21.199219 -15.832031 C 21.351562 -16.371094 21.546875 -17.453125 21.777344 -19.152344 L 13.28125 -19.152344 L 13.628906 -21.660156 C 13.863281 -23.359375 13.9375 -24.441406 13.9375 -24.945312 C 13.9375 -25.640625 13.824219 -26.101562 13.59375 -26.410156 C 13.359375 -26.683594 12.898438 -26.875 12.277344 -26.953125 C 11.96875 -27.027344 11.507812 -27.066406 10.890625 -27.066406 Z M 7.335938 -27.066406 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(100.317708, 45.725225)">
                    <g>
                        <path d="M 17.609375 -19.152344 L 2.664062 -19.152344 L 2.664062 -18.496094 C 2.664062 -17.492188 2.703125 -16.71875 2.703125 -16.257812 C 2.78125 -15.40625 2.933594 -14.828125 3.167969 -14.480469 C 3.4375 -14.132812 3.898438 -13.902344 4.59375 -13.785156 C 5.058594 -13.746094 6.023438 -13.707031 7.414062 -13.707031 L 15.910156 -13.707031 C 15.871094 -13.28125 15.832031 -13.011719 15.792969 -12.859375 C 15.792969 -12.703125 15.753906 -12.589844 15.675781 -12.511719 C 15.601562 -12.433594 15.484375 -12.355469 15.328125 -12.316406 C 15.253906 -12.316406 15.019531 -12.277344 14.710938 -12.277344 L 6.640625 -12.277344 C 5.210938 -12.277344 4.207031 -12.242188 3.667969 -12.164062 C 3.011719 -12.085938 2.511719 -11.855469 2.164062 -11.507812 C 1.851562 -11.199219 1.582031 -10.578125 1.390625 -9.652344 C 1.3125 -9.191406 1.160156 -8.261719 0.964844 -6.875 L 0.734375 -5.445312 C 0.539062 -3.898438 0.425781 -2.855469 0.386719 -2.316406 L 0.386719 -2.085938 C 0.386719 -1.46875 0.464844 -1.042969 0.695312 -0.734375 C 0.925781 -0.464844 1.3125 -0.269531 1.851562 -0.15625 C 2.394531 -0.078125 3.589844 0 5.445312 0 L 13.824219 0 C 15.753906 0 16.988281 -0.078125 17.53125 -0.15625 C 18.070312 -0.269531 18.496094 -0.425781 18.804688 -0.65625 C 19.152344 -0.925781 19.421875 -1.351562 19.578125 -1.890625 C 19.769531 -2.433594 20 -3.589844 20.234375 -5.445312 L 20.773438 -9.382812 L 21.390625 -13.707031 C 21.585938 -15.097656 21.699219 -16.023438 21.699219 -16.488281 C 21.738281 -16.71875 21.738281 -16.875 21.738281 -17.027344 C 21.738281 -17.839844 21.546875 -18.378906 21.160156 -18.648438 C 20.929688 -18.84375 20.542969 -18.960938 20 -19.035156 C 19.539062 -19.113281 18.726562 -19.152344 17.609375 -19.152344 Z M 7.335938 -6.875 L 14.941406 -6.875 C 14.90625 -6.449219 14.867188 -6.179688 14.828125 -6.023438 C 14.789062 -5.871094 14.75 -5.714844 14.671875 -5.636719 C 14.632812 -5.558594 14.558594 -5.523438 14.402344 -5.484375 C 14.324219 -5.484375 14.09375 -5.445312 13.785156 -5.445312 L 6.214844 -5.445312 C 6.292969 -5.753906 6.332031 -5.984375 6.332031 -6.101562 C 6.371094 -6.410156 6.410156 -6.601562 6.488281 -6.679688 C 6.5625 -6.757812 6.640625 -6.835938 6.757812 -6.835938 C 6.835938 -6.875 7.027344 -6.875 7.335938 -6.875 Z M 7.335938 -6.875 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(122.404452, 45.725225)">
                    <g>
                        <path d="M 2.164062 -13.707031 L 0.695312 -3.242188 C 0.65625 -2.820312 0.617188 -2.546875 0.578125 -2.394531 C 0.539062 -2.199219 0.503906 -2.007812 0.425781 -1.851562 C 0.347656 -1.621094 0.15625 -1.390625 -0.15625 -1.082031 C -0.308594 -0.886719 -0.617188 -0.539062 -1.160156 0 L 0.464844 0 C 1.3125 0 1.890625 -0.0390625 2.238281 -0.0390625 C 3.050781 -0.078125 3.667969 -0.117188 4.054688 -0.191406 C 4.671875 -0.347656 5.097656 -0.578125 5.40625 -0.925781 C 5.636719 -1.234375 5.832031 -1.699219 5.984375 -2.316406 C 6.140625 -2.855469 6.292969 -3.898438 6.488281 -5.445312 L 7.414062 -12.125 C 7.492188 -12.625 7.566406 -12.933594 7.605469 -13.050781 C 7.683594 -13.28125 7.761719 -13.4375 7.839844 -13.515625 C 7.953125 -13.59375 8.148438 -13.667969 8.378906 -13.667969 C 8.570312 -13.707031 8.957031 -13.707031 9.539062 -13.707031 L 16.101562 -13.707031 C 17.722656 -13.707031 18.765625 -13.746094 19.269531 -13.785156 C 20.078125 -13.902344 20.65625 -14.054688 21.003906 -14.363281 C 21.390625 -14.671875 21.660156 -15.214844 21.855469 -15.945312 C 22.007812 -16.488281 22.164062 -17.53125 22.394531 -19.152344 L 7.566406 -19.152344 C 6.214844 -19.152344 5.289062 -19.113281 4.75 -18.996094 C 4.171875 -18.921875 3.746094 -18.726562 3.4375 -18.417969 C 3.089844 -18.109375 2.820312 -17.492188 2.625 -16.640625 C 2.546875 -16.179688 2.394531 -15.175781 2.164062 -13.707031 Z M 2.164062 -13.707031 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(56.299128, 68.893148)">
                    <g>
                        <path d="M 1.121094 -19.152344 C 1.507812 -18.613281 1.777344 -18.265625 1.890625 -18.03125 C 2.085938 -17.800781 2.199219 -17.570312 2.238281 -17.414062 C 2.316406 -17.261719 2.316406 -17.105469 2.316406 -16.914062 C 2.316406 -16.835938 2.316406 -16.640625 2.277344 -16.332031 L 1.582031 -11.429688 L 0.734375 -5.445312 C 0.578125 -4.09375 0.464844 -3.167969 0.425781 -2.703125 C 0.425781 -2.511719 0.386719 -2.316406 0.386719 -2.125 C 0.386719 -1.582031 0.464844 -1.195312 0.617188 -0.886719 C 0.847656 -0.503906 1.351562 -0.269531 2.085938 -0.117188 C 2.625 -0.0390625 3.746094 0 5.445312 0 L 13.976562 0 C 15.445312 0 16.410156 -0.0390625 16.875 -0.078125 C 17.917969 -0.15625 18.613281 -0.386719 18.996094 -0.773438 C 19.34375 -1.160156 19.617188 -1.738281 19.769531 -2.546875 C 19.886719 -3.050781 20.039062 -4.015625 20.234375 -5.445312 L 21.390625 -13.746094 C 21.625 -15.445312 21.738281 -16.566406 21.738281 -17.066406 C 21.738281 -17.839844 21.585938 -18.339844 21.238281 -18.613281 C 20.96875 -18.882812 20.464844 -19.035156 19.769531 -19.074219 C 19.269531 -19.152344 18.226562 -19.152344 16.640625 -19.152344 L 15.5625 -11.429688 L 14.710938 -5.445312 C 14.210938 -5.445312 13.863281 -5.484375 13.707031 -5.484375 C 13.554688 -5.558594 13.4375 -5.597656 13.359375 -5.675781 C 13.320312 -5.792969 13.320312 -5.945312 13.320312 -6.140625 C 13.320312 -6.292969 13.359375 -6.527344 13.398438 -6.910156 L 14.363281 -13.785156 C 14.519531 -14.941406 14.597656 -15.714844 14.632812 -16.140625 C 14.671875 -16.449219 14.671875 -16.71875 14.671875 -16.953125 C 14.671875 -17.644531 14.597656 -18.109375 14.363281 -18.378906 C 14.132812 -18.765625 13.628906 -18.996094 12.898438 -19.074219 C 12.394531 -19.152344 11.3125 -19.152344 9.652344 -19.152344 L 8.570312 -11.699219 L 7.722656 -5.445312 C 7.183594 -5.445312 6.835938 -5.484375 6.679688 -5.484375 C 6.527344 -5.558594 6.410156 -5.636719 6.371094 -5.792969 C 6.371094 -5.90625 6.332031 -6.0625 6.332031 -6.253906 C 6.371094 -6.371094 6.410156 -6.5625 6.410156 -6.835938 L 7.375 -13.746094 C 7.644531 -15.445312 7.761719 -16.566406 7.761719 -17.105469 C 7.761719 -17.839844 7.605469 -18.339844 7.257812 -18.613281 C 7.027344 -18.84375 6.601562 -18.996094 6.0625 -19.074219 C 5.675781 -19.152344 5.136719 -19.152344 4.402344 -19.152344 Z M 1.121094 -19.152344 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(78.385872, 68.893148)">
                    <g>
                        <path d="M 17.609375 -19.152344 L 2.664062 -19.152344 L 2.664062 -18.496094 C 2.664062 -17.492188 2.703125 -16.71875 2.703125 -16.257812 C 2.78125 -15.40625 2.933594 -14.828125 3.167969 -14.480469 C 3.4375 -14.132812 3.898438 -13.902344 4.59375 -13.785156 C 5.058594 -13.746094 6.023438 -13.707031 7.414062 -13.707031 L 15.910156 -13.707031 C 15.871094 -13.28125 15.832031 -13.011719 15.792969 -12.859375 C 15.792969 -12.703125 15.753906 -12.589844 15.675781 -12.511719 C 15.601562 -12.433594 15.484375 -12.355469 15.328125 -12.316406 C 15.253906 -12.316406 15.019531 -12.277344 14.710938 -12.277344 L 6.640625 -12.277344 C 5.210938 -12.277344 4.207031 -12.242188 3.667969 -12.164062 C 3.011719 -12.085938 2.511719 -11.855469 2.164062 -11.507812 C 1.851562 -11.199219 1.582031 -10.578125 1.390625 -9.652344 C 1.3125 -9.191406 1.160156 -8.261719 0.964844 -6.875 L 0.734375 -5.445312 C 0.539062 -3.898438 0.425781 -2.855469 0.386719 -2.316406 L 0.386719 -2.085938 C 0.386719 -1.46875 0.464844 -1.042969 0.695312 -0.734375 C 0.925781 -0.464844 1.3125 -0.269531 1.851562 -0.15625 C 2.394531 -0.078125 3.589844 0 5.445312 0 L 13.824219 0 C 15.753906 0 16.988281 -0.078125 17.53125 -0.15625 C 18.070312 -0.269531 18.496094 -0.425781 18.804688 -0.65625 C 19.152344 -0.925781 19.421875 -1.351562 19.578125 -1.890625 C 19.769531 -2.433594 20 -3.589844 20.234375 -5.445312 L 20.773438 -9.382812 L 21.390625 -13.707031 C 21.585938 -15.097656 21.699219 -16.023438 21.699219 -16.488281 C 21.738281 -16.71875 21.738281 -16.875 21.738281 -17.027344 C 21.738281 -17.839844 21.546875 -18.378906 21.160156 -18.648438 C 20.929688 -18.84375 20.542969 -18.960938 20 -19.035156 C 19.539062 -19.113281 18.726562 -19.152344 17.609375 -19.152344 Z M 7.335938 -6.875 L 14.941406 -6.875 C 14.90625 -6.449219 14.867188 -6.179688 14.828125 -6.023438 C 14.789062 -5.871094 14.75 -5.714844 14.671875 -5.636719 C 14.632812 -5.558594 14.558594 -5.523438 14.402344 -5.484375 C 14.324219 -5.484375 14.09375 -5.445312 13.785156 -5.445312 L 6.214844 -5.445312 C 6.292969 -5.753906 6.332031 -5.984375 6.332031 -6.101562 C 6.371094 -6.410156 6.410156 -6.601562 6.488281 -6.679688 C 6.5625 -6.757812 6.640625 -6.835938 6.757812 -6.835938 C 6.835938 -6.875 7.027344 -6.875 7.335938 -6.875 Z M 7.335938 -6.875 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(100.472616, 68.893148)">
                    <g>
                        <path d="M 2.164062 -13.707031 L 0.695312 -3.242188 C 0.65625 -2.820312 0.617188 -2.546875 0.578125 -2.394531 C 0.539062 -2.199219 0.503906 -2.007812 0.425781 -1.851562 C 0.347656 -1.621094 0.15625 -1.390625 -0.15625 -1.082031 C -0.308594 -0.886719 -0.617188 -0.539062 -1.160156 0 L 0.464844 0 C 1.3125 0 1.890625 -0.0390625 2.238281 -0.0390625 C 3.050781 -0.078125 3.667969 -0.117188 4.054688 -0.191406 C 4.671875 -0.347656 5.097656 -0.578125 5.40625 -0.925781 C 5.636719 -1.234375 5.832031 -1.699219 5.984375 -2.316406 C 6.140625 -2.855469 6.292969 -3.898438 6.488281 -5.445312 L 7.414062 -12.125 C 7.492188 -12.625 7.566406 -12.933594 7.605469 -13.050781 C 7.683594 -13.28125 7.761719 -13.4375 7.839844 -13.515625 C 7.953125 -13.59375 8.148438 -13.667969 8.378906 -13.667969 C 8.570312 -13.707031 8.957031 -13.707031 9.539062 -13.707031 L 16.101562 -13.707031 C 17.722656 -13.707031 18.765625 -13.746094 19.269531 -13.785156 C 20.078125 -13.902344 20.65625 -14.054688 21.003906 -14.363281 C 21.390625 -14.671875 21.660156 -15.214844 21.855469 -15.945312 C 22.007812 -16.488281 22.164062 -17.53125 22.394531 -19.152344 L 7.566406 -19.152344 C 6.214844 -19.152344 5.289062 -19.113281 4.75 -18.996094 C 4.171875 -18.921875 3.746094 -18.726562 3.4375 -18.417969 C 3.089844 -18.109375 2.820312 -17.492188 2.625 -16.640625 C 2.546875 -16.179688 2.394531 -15.175781 2.164062 -13.707031 Z M 2.164062 -13.707031 " />
                    </g>
                </g>
            </g>
            <g fill="#004aad" fillOpacity="1">
                <g transform="translate(122.636587, 68.893148)">
                    <g>
                        <path d="M 1.890625 -13.707031 L 1.699219 -12.316406 C 1.46875 -10.773438 1.3125 -9.769531 1.234375 -9.265625 L 1.234375 -8.804688 C 1.234375 -8.1875 1.390625 -7.761719 1.621094 -7.492188 C 1.929688 -7.21875 2.433594 -7.027344 3.203125 -6.949219 C 3.667969 -6.910156 4.441406 -6.875 5.484375 -6.875 L 14.941406 -6.875 C 14.90625 -6.527344 14.867188 -6.292969 14.828125 -6.140625 C 14.828125 -5.945312 14.75 -5.792969 14.671875 -5.675781 C 14.597656 -5.597656 14.480469 -5.523438 14.324219 -5.484375 C 14.210938 -5.484375 13.902344 -5.445312 13.4375 -5.445312 L 0.734375 -5.445312 C 0.503906 -3.746094 0.386719 -2.664062 0.386719 -2.125 C 0.386719 -1.542969 0.464844 -1.121094 0.65625 -0.8125 C 0.886719 -0.539062 1.234375 -0.347656 1.699219 -0.191406 C 2.238281 -0.117188 3.476562 -0.0390625 5.484375 -0.0390625 L 13.976562 -0.0390625 C 15.945312 -0.0390625 17.222656 -0.117188 17.761719 -0.191406 C 18.339844 -0.347656 18.765625 -0.578125 19.074219 -0.886719 C 19.304688 -1.195312 19.460938 -1.582031 19.617188 -2.085938 C 19.769531 -2.625 20 -3.746094 20.234375 -5.445312 L 20.425781 -6.875 C 20.621094 -8.417969 20.734375 -9.421875 20.734375 -9.886719 L 20.734375 -10.117188 C 20.734375 -10.8125 20.621094 -11.3125 20.347656 -11.621094 C 20.078125 -11.929688 19.539062 -12.164062 18.6875 -12.242188 C 18.226562 -12.316406 17.222656 -12.316406 15.675781 -12.316406 L 7.183594 -12.316406 C 7.257812 -12.742188 7.296875 -13.011719 7.296875 -13.128906 C 7.335938 -13.28125 7.375 -13.398438 7.453125 -13.476562 C 7.53125 -13.59375 7.683594 -13.667969 7.839844 -13.667969 C 7.992188 -13.707031 8.378906 -13.707031 8.917969 -13.707031 L 16.488281 -13.707031 C 17.722656 -13.707031 18.613281 -13.746094 19.074219 -13.824219 C 19.617188 -13.902344 20 -13.976562 20.3125 -14.132812 C 20.851562 -14.402344 21.238281 -14.90625 21.46875 -15.636719 C 21.660156 -16.179688 21.894531 -17.375 22.125 -19.152344 L 7.800781 -19.152344 C 6.410156 -19.152344 5.445312 -19.152344 4.902344 -19.074219 C 4.207031 -18.996094 3.707031 -18.84375 3.359375 -18.574219 C 2.972656 -18.265625 2.664062 -17.761719 2.472656 -16.988281 C 2.316406 -16.449219 2.125 -15.367188 1.890625 -13.707031 Z M 1.890625 -13.707031 " />
                    </g>
                </g>
            </g>
        </svg>
    );
}