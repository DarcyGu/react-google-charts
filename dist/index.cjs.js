'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var Script = _interopDefault(require('react-load-script'));

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var chartDefaultProps = {
    graph_id: null,
    legend_toggle: false,
    graphID: null,
    options: {
        colors: null
    },
    data: null,
    rows: null,
    columns: null,
    diffdata: null,
    chartEvents: null,
    legendToggle: false,
    removeEmptyColumns: null,
    chartActions: null,
    getChartWrapper: function (chartWrapper, google) { },
    getChartEditor: null,
    className: "",
    style: {},
    formatters: null,
    formatAll: null,
    spreadSheetUrl: null,
    spreadSheetQueryParameters: {
        headers: 1,
        gid: 1
    },
    rootProps: {},
    chartWrapperParams: {},
    controls: null,
    render: null,
    toolbarItems: null,
    toolbarID: null
};

var GoogleChartLoader = (function (_super) {
    __extends(GoogleChartLoader, _super);
    function GoogleChartLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleGoogleChartsLoaderScriptLoaded = function (windowGoogleCharts) {
            var _a = _this.props, version = _a.chartVersion, packages = _a.chartPackages, language = _a.chartLanguage, mapsApiKey = _a.mapsApiKey, onLoad = _a.onLoad;
            windowGoogleCharts.charts.load(version || "current", {
                packages: packages || ["corechart", "controls"],
                language: language || "en",
                mapsApiKey: mapsApiKey
            });
            windowGoogleCharts.charts.setOnLoadCallback(function () {
                onLoad(windowGoogleCharts);
            });
        };
        return _this;
    }
    GoogleChartLoader.prototype.shouldComponentUpdate = function (nextProps) {
        return nextProps.chartPackages === this.props.chartPackages;
    };
    GoogleChartLoader.prototype.render = function () {
        var _this = this;
        var onError = this.props.onError;
        return (React.createElement(Script, { url: "https://www.gstatic.com/charts/loader.js", onError: onError, onLoad: function () {
                var windowWithGoogle = window;
                if (windowWithGoogle.google) {
                    _this.handleGoogleChartsLoaderScriptLoaded(windowWithGoogle.google);
                }
            } }));
    };
    return GoogleChartLoader;
}(React.Component));

var uniqueID = 0;
var generateUniqueID = function () {
    uniqueID += 1;
    return "reactgooglegraph-" + uniqueID;
};

var DEFAULT_CHART_COLORS = [
    "#3366CC",
    "#DC3912",
    "#FF9900",
    "#109618",
    "#990099",
    "#3B3EAC",
    "#0099C6",
    "#DD4477",
    "#66AA00",
    "#B82E2E",
    "#316395",
    "#994499",
    "#22AA99",
    "#AAAA11",
    "#6633CC",
    "#E67300",
    "#8B0707",
    "#329262",
    "#5574A6",
    "#3B3EAC"
];

var _this = undefined;
var loadDataTableFromSpreadSheet = function (googleViz, spreadSheetUrl, urlParams) {
    if (urlParams === void 0) { urlParams = {}; }
    return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, new Promise(function (resolve, reject) {
                    var headers = "" + (urlParams.headers ? "headers=" + urlParams.headers : "headers=0");
                    var queryString = "" + (urlParams.query ? "&tq=" + encodeURIComponent(urlParams.query) : "");
                    var gid = "" + (urlParams.gid ? "&gid=" + urlParams.gid : "");
                    var sheet = "" + (urlParams.sheet ? "&sheet=" + urlParams.sheet : "");
                    var access_token = "" + (urlParams.access_token ? "&access_token=" + urlParams.access_token : "");
                    var urlQueryString = "" + headers + gid + sheet + queryString + access_token;
                    var urlToSpreadSheet = spreadSheetUrl + "/gviz/tq?" + urlQueryString;
                    var query = new googleViz.visualization.Query(urlToSpreadSheet);
                    query.send(function (response) {
                        if (response.isError()) {
                            reject("Error in query:  " + response.getMessage() + " " + response.getDetailedMessage());
                        }
                        else {
                            resolve(response.getDataTable());
                        }
                    });
                })];
        });
    });
};

var _a = React.createContext(chartDefaultProps), Provider = _a.Provider, Consumer = _a.Consumer;
var ContextProvider = function (_a) {
    var children = _a.children, value = _a.value;
    return React.createElement(Provider, { value: value }, children);
};
var ContextConsumer = function (_a) {
    var render = _a.render;
    return (React.createElement(Consumer, null, function (context) {
        return render(context);
    }));
};

var GRAY_COLOR = "#CCCCCC";
var GoogleChartDataTableInner = (function (_super) {
    __extends(GoogleChartDataTableInner, _super);
    function GoogleChartDataTableInner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hiddenColumns: []
        };
        _this.listenToLegendToggle = function () {
            var _a = _this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
            google.visualization.events.addListener(googleChartWrapper, "select", function () {
                var chart = googleChartWrapper.getChart();
                var selection = chart.getSelection();
                var dataTable = googleChartWrapper.getDataTable();
                if (selection.length === 0 ||
                    selection[0].row !== null ||
                    dataTable === null) {
                    return;
                }
                var columnIndex = selection[0].column;
                var columnID = _this.getColumnID(dataTable, columnIndex);
                if (_this.state.hiddenColumns.includes(columnID)) {
                    _this.setState(function (state) { return (__assign({}, state, { hiddenColumns: state.hiddenColumns.filter(function (colID) { return colID !== columnID; }).slice() })); });
                }
                else {
                    _this.setState(function (state) { return (__assign({}, state, { hiddenColumns: state.hiddenColumns.concat([columnID]) })); });
                }
            });
        };
        _this.applyFormatters = function (dataTable, formatters) {
            var google = _this.props.google;
            for (var _i = 0, formatters_1 = formatters; _i < formatters_1.length; _i++) {
                var formatter = formatters_1[_i];
                switch (formatter.type) {
                    case "ArrowFormat": {
                        var vizFormatter = new google.visualization.ArrowFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "BarFormat": {
                        var vizFormatter = new google.visualization.BarFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "ColorFormat": {
                        var vizFormatter = new google.visualization.ColorFormat(formatter.options);
                        var ranges = formatter.ranges;
                        for (var _a = 0, ranges_1 = ranges; _a < ranges_1.length; _a++) {
                            var range = ranges_1[_a];
                            vizFormatter.addRange.apply(vizFormatter, range);
                        }
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "DateFormat": {
                        var vizFormatter = new google.visualization.DateFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "NumberFormat": {
                        var vizFormatter = new google.visualization.NumberFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                    case "PatternFormat": {
                        var vizFormatter = new google.visualization.PatternFormat(formatter.options);
                        vizFormatter.format(dataTable, formatter.column);
                        break;
                    }
                }
            }
        };
        _this.applyFormatAll = function (dataTable, formatAll) {
            var google = _this.props.google;
            switch (formatAll.type) {
                case "ArrowFormat": {
                    var vizFormatter = new google.visualization.ArrowFormat(formatAll.options);
                    for (var index = 1; index < dataTable.getNumberOfColumns(); index++) {
                        vizFormatter.format(dataTable, index);
                    }
                    break;
                }
                case "BarFormat": {
                    var vizFormatter = new google.visualization.BarFormat(formatAll.options);
                    for (var index = 1; index < dataTable.getNumberOfColumns(); index++) {
                        vizFormatter.format(dataTable, index);
                    }
                    break;
                }
                case "ColorFormat": {
                    var vizFormatter = new google.visualization.ColorFormat(formatAll.options);
                    var ranges = formatAll.ranges;
                    for (var _i = 0, ranges_2 = ranges; _i < ranges_2.length; _i++) {
                        var range = ranges_2[_i];
                        vizFormatter.addRange.apply(vizFormatter, range);
                    }
                    for (var index = 1; index < dataTable.getNumberOfColumns(); index++) {
                        vizFormatter.format(dataTable, index);
                    }
                    break;
                }
                case "DateFormat": {
                    var vizFormatter = new google.visualization.DateFormat(formatAll.options);
                    for (var index = 1; index < dataTable.getNumberOfColumns(); index++) {
                        vizFormatter.format(dataTable, index);
                    }
                    break;
                }
                case "NumberFormat": {
                    var vizFormatter = new google.visualization.NumberFormat(formatAll.options);
                    for (var index = 1; index < dataTable.getNumberOfColumns(); index++) {
                        vizFormatter.format(dataTable, index);
                    }
                    break;
                }
                case "PatternFormat": {
                    var vizFormatter = new google.visualization.PatternFormat(formatAll.options);
                    for (var index = 1; index < dataTable.getNumberOfColumns(); index++) {
                        vizFormatter.format(dataTable, index);
                    }
                    break;
                }
            }
        };
        _this.getColumnID = function (dataTable, columnIndex) {
            return (dataTable.getColumnId(columnIndex) ||
                dataTable.getColumnLabel(columnIndex));
        };
        _this.draw = function (_a) {
            var data = _a.data, diffdata = _a.diffdata, rows = _a.rows, columns = _a.columns, options = _a.options, legend_toggle = _a.legend_toggle, legendToggle = _a.legendToggle, removeEmptyColumns = _a.removeEmptyColumns, chartType = _a.chartType, formatters = _a.formatters, formatAll = _a.formatAll, spreadSheetUrl = _a.spreadSheetUrl, spreadSheetQueryParameters = _a.spreadSheetQueryParameters;
            return __awaiter(_this, void 0, void 0, function () {
                var _b, google, googleChartWrapper, dataTable, chartDiff, oldData, newData, columnCount_1, rowCount, emptyColumns, i, empty, j, i, columnCount, newColumns, i, columnID, chart;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            _b = this.props, google = _b.google, googleChartWrapper = _b.googleChartWrapper;
                            chartDiff = null;
                            if (diffdata !== null) {
                                oldData = google.visualization.arrayToDataTable(diffdata.old);
                                newData = google.visualization.arrayToDataTable(diffdata.new);
                                chartDiff = google.visualization[chartType].prototype.computeDiff(oldData, newData);
                            }
                            if (!(data !== null)) return [3, 1];
                            if (Array.isArray(data)) {
                                dataTable = google.visualization.arrayToDataTable(data);
                            }
                            else {
                                dataTable = new google.visualization.DataTable(data);
                            }
                            return [3, 5];
                        case 1:
                            if (!(rows !== null && columns !== null)) return [3, 2];
                            dataTable = google.visualization.arrayToDataTable([columns].concat(rows));
                            return [3, 5];
                        case 2:
                            if (!(spreadSheetUrl !== null)) return [3, 4];
                            return [4, loadDataTableFromSpreadSheet(google, spreadSheetUrl, spreadSheetQueryParameters)];
                        case 3:
                            dataTable = (_c.sent());
                            return [3, 5];
                        case 4:
                            dataTable = google.visualization.arrayToDataTable([]);
                            _c.label = 5;
                        case 5:
                            if (removeEmptyColumns) {
                                columnCount_1 = dataTable.getNumberOfColumns();
                                rowCount = dataTable.getNumberOfRows();
                                emptyColumns = [];
                                for (i = 0; i < columnCount_1; i += 1) {
                                    empty = true;
                                    inner: for (j = 0; j < rowCount; j++) {
                                        if (dataTable.getValue(j, i) !== null) {
                                            empty = false;
                                            break inner;
                                        }
                                    }
                                    if (empty) {
                                        emptyColumns.push(i);
                                    }
                                }
                                if (emptyColumns.length === columnCount_1 - 1) {
                                    dataTable.addColumn({
                                        label: removeEmptyColumns,
                                        type: "number"
                                    });
                                }
                                for (i = 0; i < emptyColumns.length; i++) {
                                    dataTable.removeColumn(emptyColumns[i] - i);
                                }
                            }
                            columnCount = dataTable.getNumberOfColumns();
                            newColumns = [];
                            for (i = 0; i < columnCount; i += 1) {
                                columnID = this.getColumnID(dataTable, i);
                                if (this.state.hiddenColumns.includes(columnID)) {
                                    newColumns[i] = {
                                        label: dataTable.getColumnLabel(i),
                                        type: dataTable.getColumnType(i)
                                    };
                                }
                                else {
                                    newColumns[i] = i;
                                }
                            }
                            chart = googleChartWrapper.getChart();
                            if (googleChartWrapper.getChartType() === "Timeline") {
                                chart && chart.clearChart();
                            }
                            googleChartWrapper.setOptions(options);
                            googleChartWrapper.setDataTable(dataTable);
                            googleChartWrapper.setView({ columns: newColumns });
                            googleChartWrapper.draw();
                            if (this.props.googleChartDashboard !== null) {
                                this.props.googleChartDashboard.draw(dataTable);
                            }
                            if (chartDiff !== null) {
                                googleChartWrapper.setDataTable(chartDiff);
                                googleChartWrapper.draw();
                            }
                            if (formatters !== null) {
                                this.applyFormatters(dataTable, formatters);
                                googleChartWrapper.setDataTable(dataTable);
                                googleChartWrapper.draw();
                            }
                            if (formatAll !== null) {
                                this.applyFormatAll(dataTable, formatAll);
                                googleChartWrapper.setDataTable(dataTable);
                                googleChartWrapper.draw();
                            }
                            if (legendToggle === true || legend_toggle === true) {
                                this.grayOutHiddenColumns({ options: options });
                            }
                            return [2];
                    }
                });
            });
        };
        _this.grayOutHiddenColumns = function (_a) {
            var options = _a.options;
            var googleChartWrapper = _this.props.googleChartWrapper;
            var dataTable = googleChartWrapper.getDataTable();
            if (dataTable === null)
                return;
            var columnCount = dataTable.getNumberOfColumns();
            var hasAHiddenColumn = _this.state.hiddenColumns.length > 0;
            if (hasAHiddenColumn === false)
                return;
            var colors = Array.from({ length: columnCount - 1 }).map(function (dontcare, i) {
                var columnID = _this.getColumnID(dataTable, i + 1);
                if (_this.state.hiddenColumns.includes(columnID)) {
                    return GRAY_COLOR;
                }
                else if (typeof options.colors !== "undefined" &&
                    options.colors !== null) {
                    return options.colors[i];
                }
                else {
                    return DEFAULT_CHART_COLORS[i];
                }
            });
            googleChartWrapper.setOptions(__assign({}, options, { colors: colors }));
            googleChartWrapper.draw();
        };
        _this.onResize = function () {
            var googleChartWrapper = _this.props.googleChartWrapper;
            googleChartWrapper.draw();
        };
        return _this;
    }
    GoogleChartDataTableInner.prototype.componentDidMount = function () {
        this.draw(this.props);
        window.addEventListener("resize", this.onResize);
        if (this.props.legend_toggle || this.props.legendToggle) {
            this.listenToLegendToggle();
        }
    };
    GoogleChartDataTableInner.prototype.componentWillUnmount = function () {
        var _a = this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
        window.removeEventListener("resize", this.onResize);
        google.visualization.events.removeAllListeners(googleChartWrapper);
        if (googleChartWrapper.getChartType() === "Timeline") {
            googleChartWrapper.getChart() &&
                googleChartWrapper.getChart().clearChart();
        }
    };
    GoogleChartDataTableInner.prototype.componentDidUpdate = function () {
        this.draw(this.props);
    };
    GoogleChartDataTableInner.prototype.render = function () {
        return null;
    };
    return GoogleChartDataTableInner;
}(React.Component));
var GoogleChartDataTable = (function (_super) {
    __extends(GoogleChartDataTable, _super);
    function GoogleChartDataTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleChartDataTable.prototype.componentDidMount = function () { };
    GoogleChartDataTable.prototype.componentWillUnmount = function () { };
    GoogleChartDataTable.prototype.shouldComponentUpdate = function () {
        return false;
    };
    GoogleChartDataTable.prototype.render = function () {
        var _a = this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper, googleChartDashboard = _a.googleChartDashboard;
        return (React.createElement(ContextConsumer, { render: function (props) {
                return (React.createElement(GoogleChartDataTableInner, __assign({}, props, { google: google, googleChartWrapper: googleChartWrapper, googleChartDashboard: googleChartDashboard })));
            } }));
    };
    return GoogleChartDataTable;
}(React.Component));

var GoogleChartEvents = (function (_super) {
    __extends(GoogleChartEvents, _super);
    function GoogleChartEvents() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleChartEvents.prototype.shouldComponentUpdate = function () {
        return false;
    };
    GoogleChartEvents.prototype.listenToEvents = function (_a) {
        var _this = this;
        var chartEvents = _a.chartEvents, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
        if (chartEvents === null) {
            return;
        }
        google.visualization.events.removeAllListeners(googleChartWrapper);
        var _loop_1 = function (event_1) {
            var eventName = event_1.eventName, callback = event_1.callback;
            google.visualization.events.addListener(googleChartWrapper, eventName, function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                callback({
                    chartWrapper: googleChartWrapper,
                    props: _this.props,
                    google: google,
                    eventArgs: args
                });
            });
        };
        for (var _i = 0, chartEvents_1 = chartEvents; _i < chartEvents_1.length; _i++) {
            var event_1 = chartEvents_1[_i];
            _loop_1(event_1);
        }
    };
    GoogleChartEvents.prototype.render = function () {
        var _this = this;
        var _a = this.props, google = _a.google, googleChartWrapper = _a.googleChartWrapper;
        return (React.createElement(ContextConsumer, { render: function (propsFromContext) {
                _this.listenToEvents({
                    chartEvents: propsFromContext.chartEvents || null,
                    google: google,
                    googleChartWrapper: googleChartWrapper
                });
                return null;
            } }));
    };
    return GoogleChartEvents;
}(React.Component));

var controlCounter = 0;
var GoogleChart = (function (_super) {
    __extends(GoogleChart, _super);
    function GoogleChart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            googleChartWrapper: null,
            googleChartDashboard: null,
            googleChartControls: null,
            googleChartEditor: null,
            isReady: false
        };
        _this.graphID = null;
        _this.dashboard_ref = React.createRef();
        _this.toolbar_ref = React.createRef();
        _this.getGraphID = function () {
            var _a = _this.props, graphID = _a.graphID, graph_id = _a.graph_id;
            var instanceGraphID;
            if (graphID === null && graph_id === null) {
                if (_this.graphID === null) {
                    instanceGraphID = generateUniqueID();
                }
                else {
                    instanceGraphID = _this.graphID;
                }
            }
            else if (graphID !== null && graph_id === null) {
                instanceGraphID = graphID;
            }
            else if (graph_id !== null && graphID === null) {
                instanceGraphID = graph_id;
            }
            else {
                instanceGraphID = graphID;
            }
            _this.graphID = instanceGraphID;
            return _this.graphID;
        };
        _this.getControlID = function (id, index) {
            controlCounter += 1;
            var controlID;
            if (typeof id === "undefined") {
                controlID = "googlechart-control-" + index + "-" + controlCounter;
            }
            else {
                controlID = id;
            }
            return controlID;
        };
        _this.addControls = function (googleChartWrapper, googleChartDashboard) {
            var _a = _this.props, google = _a.google, controls = _a.controls;
            var googleChartControls = controls === null
                ? null
                : controls.map(function (control, i) {
                    var controlIDMaybe = control.controlID, controlType = control.controlType, controlOptions = control.options, controlWrapperParams = control.controlWrapperParams;
                    var controlID = _this.getControlID(controlIDMaybe, i);
                    return {
                        controlProp: control,
                        control: new google.visualization.ControlWrapper(__assign({ containerId: controlID, controlType: controlType, options: controlOptions }, controlWrapperParams))
                    };
                });
            if (googleChartControls === null) {
                return null;
            }
            googleChartDashboard.bind(googleChartControls.map(function (_a) {
                var control = _a.control;
                return control;
            }), googleChartWrapper);
            var _loop_1 = function (chartControl) {
                var control = chartControl.control, controlProp = chartControl.controlProp;
                var _a = controlProp.controlEvents, controlEvents = _a === void 0 ? [] : _a;
                var _loop_2 = function (event_1) {
                    var callback = event_1.callback, eventName = event_1.eventName;
                    google.visualization.events.removeListener(control, eventName, callback);
                    google.visualization.events.addListener(control, eventName, function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        callback({
                            chartWrapper: googleChartWrapper,
                            controlWrapper: control,
                            props: _this.props,
                            google: google,
                            eventArgs: args
                        });
                    });
                };
                for (var _i = 0, controlEvents_1 = controlEvents; _i < controlEvents_1.length; _i++) {
                    var event_1 = controlEvents_1[_i];
                    _loop_2(event_1);
                }
            };
            for (var _i = 0, googleChartControls_1 = googleChartControls; _i < googleChartControls_1.length; _i++) {
                var chartControl = googleChartControls_1[_i];
                _loop_1(chartControl);
            }
            return googleChartControls;
        };
        _this.renderChart = function () {
            var _a = _this.props, width = _a.width, height = _a.height, options = _a.options, style = _a.style, className = _a.className, rootProps = _a.rootProps, google = _a.google;
            var divStyle = __assign({ height: height || (options && options.height), width: width || (options && options.width) }, style);
            return (React.createElement("div", __assign({ id: _this.getGraphID(), style: divStyle, className: className }, rootProps), _this.state.isReady && _this.state.googleChartWrapper !== null ? (React.createElement(React.Fragment, null,
                React.createElement(GoogleChartDataTable, { googleChartWrapper: _this.state.googleChartWrapper, google: google, googleChartDashboard: _this.state.googleChartDashboard }),
                React.createElement(GoogleChartEvents, { googleChartWrapper: _this.state.googleChartWrapper, google: google }))) : null));
        };
        _this.renderControl = function (filter) {
            if (filter === void 0) { filter = function (_a) {
                var control = _a.control, controlProp = _a.controlProp;
                return true;
            }; }
            return _this.state.isReady && _this.state.googleChartControls !== null ? (React.createElement(React.Fragment, null, _this.state.googleChartControls
                .filter(function (_a) {
                var controlProp = _a.controlProp, control = _a.control;
                return filter({ control: control, controlProp: controlProp });
            })
                .map(function (_a) {
                var control = _a.control, controlProp = _a.controlProp;
                return (React.createElement("div", { key: control.getContainerId(), id: control.getContainerId() }));
            }))) : null;
        };
        _this.renderToolBar = function () {
            if (_this.props.toolbarItems === null)
                return null;
            return React.createElement("div", { ref: _this.toolbar_ref });
        };
        return _this;
    }
    GoogleChart.prototype.componentDidMount = function () {
        var _a = this.props, options = _a.options, google = _a.google, chartType = _a.chartType, chartWrapperParams = _a.chartWrapperParams, toolbarItems = _a.toolbarItems, getChartEditor = _a.getChartEditor, getChartWrapper = _a.getChartWrapper;
        var chartConfig = __assign({ chartType: chartType,
            options: options, containerId: this.getGraphID() }, chartWrapperParams);
        var googleChartWrapper = new google.visualization.ChartWrapper(chartConfig);
        googleChartWrapper.setOptions(options);
        getChartWrapper(googleChartWrapper, google);
        var googleChartDashboard = new google.visualization.Dashboard(this.dashboard_ref);
        var googleChartControls = this.addControls(googleChartWrapper, googleChartDashboard);
        if (toolbarItems !== null) {
            google.visualization.drawToolbar(this.toolbar_ref.current, toolbarItems);
        }
        var googleChartEditor = null;
        if (getChartEditor !== null) {
            googleChartEditor = new google.visualization.ChartEditor();
            getChartEditor({
                chartEditor: googleChartEditor,
                chartWrapper: googleChartWrapper,
                google: google
            });
        }
        this.setState({
            googleChartEditor: googleChartEditor,
            googleChartControls: googleChartControls,
            googleChartDashboard: googleChartDashboard,
            googleChartWrapper: googleChartWrapper,
            isReady: true
        });
    };
    GoogleChart.prototype.componentDidUpdate = function () {
        if (this.state.googleChartWrapper === null)
            return;
        if (this.state.googleChartDashboard === null)
            return;
        if (this.state.googleChartControls === null)
            return;
        var controls = this.props.controls;
        for (var i = 0; i < controls.length; i += 1) {
            var _a = controls[i], controlType = _a.controlType, options = _a.options, controlWrapperParams = _a.controlWrapperParams;
            if (controlWrapperParams && "state" in controlWrapperParams) {
                this.state.googleChartControls[i].control.setState(controlWrapperParams["state"]);
            }
            this.state.googleChartControls[i].control.setOptions(options);
            this.state.googleChartControls[i].control.setControlType(controlType);
        }
    };
    GoogleChart.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return (this.state.isReady !== nextState.isReady ||
            nextProps.controls !== this.props.controls);
    };
    GoogleChart.prototype.render = function () {
        var _a = this.props, width = _a.width, height = _a.height, options = _a.options, style = _a.style;
        var divStyle = __assign({ height: height || (options && options.height), width: width || (options && options.width) }, style);
        if (this.props.render !== null) {
            return (React.createElement("div", { ref: this.dashboard_ref, style: divStyle },
                React.createElement("div", { ref: this.toolbar_ref, id: "toolbar" }),
                this.props.render({
                    renderChart: this.renderChart,
                    renderControl: this.renderControl,
                    renderToolbar: this.renderToolBar
                })));
        }
        else {
            return (React.createElement("div", { ref: this.dashboard_ref, style: divStyle },
                this.renderControl(function (_a) {
                    var controlProp = _a.controlProp;
                    return controlProp.controlPosition !== "bottom";
                }),
                this.renderChart(),
                this.renderControl(function (_a) {
                    var controlProp = _a.controlProp;
                    return controlProp.controlPosition === "bottom";
                }),
                this.renderToolBar()));
        }
    };
    return GoogleChart;
}(React.Component));

var Chart = (function (_super) {
    __extends(Chart, _super);
    function Chart() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isMounted = false;
        _this.state = {
            loadingStatus: "loading",
            google: null
        };
        _this.onLoad = function (google) {
            if (_this.isFullyLoaded(google)) {
                _this.onSuccess(google);
            }
            else {
                var id_1 = setInterval(function () {
                    var google = window.google;
                    if (_this._isMounted) {
                        if (google && _this.isFullyLoaded(google)) {
                            clearInterval(id_1);
                            _this.onSuccess(google);
                        }
                    }
                    else {
                        clearInterval(id_1);
                    }
                }, 1000);
            }
        };
        _this.onSuccess = function (google) {
            _this.setState({
                loadingStatus: "ready",
                google: google
            });
        };
        _this.onError = function () {
            _this.setState({
                loadingStatus: "errored"
            });
        };
        return _this;
    }
    Chart.prototype.render = function () {
        var _a = this.props, chartLanguage = _a.chartLanguage, chartPackages = _a.chartPackages, chartVersion = _a.chartVersion, mapsApiKey = _a.mapsApiKey, loader = _a.loader, errorElement = _a.errorElement;
        return (React.createElement(ContextProvider, { value: this.props },
            this.state.loadingStatus === "ready" && this.state.google !== null ? (React.createElement(GoogleChart, __assign({}, this.props, { google: this.state.google }))) : this.state.loadingStatus === "errored" && errorElement ? (errorElement) : (loader),
            React.createElement(GoogleChartLoader, __assign({}, { chartLanguage: chartLanguage, chartPackages: chartPackages, chartVersion: chartVersion, mapsApiKey: mapsApiKey }, { onLoad: this.onLoad, onError: this.onError }))));
    };
    Chart.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    Chart.prototype.componentWillUnmount = function () {
        this._isMounted = false;
    };
    Chart.prototype.isFullyLoaded = function (google) {
        var _a = this.props, controls = _a.controls, toolbarItems = _a.toolbarItems, getChartEditor = _a.getChartEditor;
        return (google &&
            google.visualization &&
            google.visualization.ChartWrapper &&
            google.visualization.Dashboard &&
            (!controls || google.visualization.ChartWrapper) &&
            (!getChartEditor || google.visualization.ChartEditor) &&
            (!toolbarItems || google.visualization.drawToolbar));
    };
    Chart.defaultProps = chartDefaultProps;
    return Chart;
}(React.Component));

exports.Chart = Chart;
exports.default = Chart;
