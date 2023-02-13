"use strict";

const Path = require("path");
const Webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ExtractSASS = new MiniCssExtractPlugin({filename:"./[name].[hash].css"});
const CopyWebpackPlugin = require("copy-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const webpack = require("webpack");

const pages = require("./src/pages");
let renderedPages = [];
for (let i = 0; i < pages.length; i++) {
  let page = Object.assign({}, pages[i]);
  renderedPages.push(
    new HtmlWebpackPlugin({
      template: page.template,
      filename: page.output,
      title: page.content.title,
      heading_icon: page.content.heading_icon,
      description: page.content.description,
    })
  );
}

module.exports = (options) => {
  const dest = Path.join(__dirname, "architectui-html-pro");

  let webpackConfig = {
    mode: 'none',
    devtool: options.devtool,
    entry: {
      main: "./src/app.js",
      demo: "./src/scripts-init/demo.js",
      ladda: "./src/scripts-init/ladda-loading.js",
      blockui: "./src/scripts-init/blockui.js",
      circle_progress: "./src/scripts-init/circle-progress.js",
      count_up: "./src/scripts-init/count-up.js",
      toastr: "./src/scripts-init/toastr.js",
      sweet_alerts: "./src/scripts-init/sweet-alerts.js",
      scrollbar: "./src/scripts-init/scrollbar.js",
      sticky_elements: "./src/scripts-init/sticky-elements.js",
      carousel_slider: "./src/scripts-init/carousel-slider.js",
      fullcalendar: "./src/scripts-init/calendar.js",
      treeview: "./src/scripts-init/treeview.js",
      maps: "./src/scripts-init/maps.js",
      rating: "./src/scripts-init/rating.js",
      image_crop: "./src/scripts-init/image-crop.js",
      guided_tours: "./src/scripts-init/guided-tours.js",
      tables: "./src/scripts-init/tables.js",

      form_validation: "./src/scripts-init/form-components/form-validation.js",
      form_wizard: "./src/scripts-init/form-components/form-wizard.js",
      clipboard: "./src/scripts-init/form-components/clipboard.js",
      datepicker: "./src/scripts-init/form-components/datepicker.js",
      input_mask: "./src/scripts-init/form-components/input-mask.js",
      input_select: "./src/scripts-init/form-components/input-select.js",
      range_slider: "./src/scripts-init/form-components/range-slider.js",
      textarea_autosize:
        "./src/scripts-init/form-components/textarea-autosize.js",
      toggle_switch: "./src/scripts-init/form-components/toggle-switch.js",

      chart_js: "./src/scripts-init/charts/chartjs.js",
      apex_charts: "./src/scripts-init/charts/apex-charts.js",
      sparklines: "./src/scripts-init/charts/charts-sparklines.js",
    },
    output: {
      path: dest,
      filename: "./assets/scripts/[name].[hash].js",
    },
    plugins: [
      new Webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Tether: "tether",
        "window.Tether": "tether",
        Popper: ["popper.js", "default"],
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/assets/images", to: "./assets/images" },
      ]}),
      new CopyWebpackPlugin({
        patterns: [
          { from: "./src/assets/fonts", to: "./assets/fonts" },
      ]}),
      new Webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(
            options.isProduction ? "production" : "development"
          ),
        },
      }),
    ],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: "babel-loader",
        },
        {
          test: /\.hbs$/,
          loader: "handlebars-loader",
          options: {
            helperDirs: [Path.join(__dirname, "src", "helpers")],
            partialDirs: [
              Path.join(__dirname, "src", "layout"),
              Path.join(__dirname, "src", "DemoPages"),
            ],
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
  };

  if (options.isProduction) {
    webpackConfig.entry = [
      "./src/app.js",
      "./src/scripts-init/demo.js",
      "./src/scripts-init/ladda-loading.js",
      "./src/scripts-init/blockui.js",
      "./src/scripts-init/circle-progress.js",
      "./src/scripts-init/count-up.js",
      "./src/scripts-init/toastr.js",
      "./src/scripts-init/sweet-alerts.js",
      "./src/scripts-init/scrollbar.js",
      "./src/scripts-init/sticky-elements.js",
      "./src/scripts-init/carousel-slider.js",
      "./src/scripts-init/calendar.js",
      "./src/scripts-init/treeview.js",
      "./src/scripts-init/maps.js",
      "./src/scripts-init/rating.js",
      "./src/scripts-init/image-crop.js",
      "./src/scripts-init/guided-tours.js",
      "./src/scripts-init/tables.js",

      "./src/scripts-init/form-components/form-validation.js",
      "./src/scripts-init/form-components/form-wizard.js",
      "./src/scripts-init/form-components/clipboard.js",
      "./src/scripts-init/form-components/datepicker.js",
      "./src/scripts-init/form-components/input-mask.js",
      "./src/scripts-init/form-components/input-select.js",
      "./src/scripts-init/form-components/range-slider.js",
      "./src/scripts-init/form-components/textarea-autosize.js",
      "./src/scripts-init/form-components/toggle-switch.js",

      "./src/scripts-init/charts/chartjs.js",
      "./src/scripts-init/charts/apex-charts.js",
      "./src/scripts-init/charts/charts-sparklines.js",
    ];

    webpackConfig.plugins.push(
      ExtractSASS,
      new CleanWebpackPlugin({
        verbose: true,
        dry: false,
      })
    );

    webpackConfig.module.rules.push(
      {
        test: /\.scss$/i,
        use: ExtractSASS.extract(["css-loader", "sass-loader"]),
      },
      {
        test: /\.css$/i,
        use: ExtractSASS.extract(["css-loader"]),
      }
    );
  } else {
    webpackConfig.plugins.push(new Webpack.HotModuleReplacementPlugin());

    webpackConfig.module.rules.push(
      {
        test: /\.scss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    );

    webpackConfig.devServer = {
      port: options.port,
      historyApiFallback: true,
      hot: !options.isProduction,
    };

    webpackConfig.plugins.push(
      new BrowserSyncPlugin(
        {
          host: "localhost",
          port: 3000,
          files: ["public/**/*.*"],
          browser: "google chrome",
          reloadDelay: 1000,
        },
        {
          reload: false,
        }
      )
    );
  }

  webpackConfig.plugins = webpackConfig.plugins.concat(renderedPages);

  return webpackConfig;
};
