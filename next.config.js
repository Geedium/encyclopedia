const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, _options) => {
        config.module.rules.push({
            test: /\.(graphql|gql)/,
            exclude: /node_modules/,
            loader: "graphql-tag/loader"
        });

        config.resolve.alias = {
            ...config.resolve.alias,
            '@': path.resolve(__dirname, 'src'),
        }

        return config;
    },
}

module.exports = nextConfig
