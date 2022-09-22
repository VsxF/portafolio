import { FC } from "react";

export const Like: FC<{ onClick?: Function }> = ({ onClick }) =>
    <svg onClick={() => onClick ? onClick() : {}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 490.1 490.1" style={{ width: "100%", height: "100%" }}>
            <path d="M201.9,21.018c-18.6,13.6-28,36.9-28,69v76.2H68.3c-37.6,0-68.3,30.6-68.3,68.3v2.1c0,0.6,0.1,1.3,0.2,1.9l28.1,176.5
		c5.2,42.4,34.8,66.8,81.1,66.8h209.2c37.6,0,68.3-30.6,68.3-68.3v-196.1c0-5.9,4.8-10.7,10.7-10.7h57.3c5.9,0,10.7,4.8,10.7,10.7
		v207.9c0,5.9-4.8,10.7-10.7,10.7h-33.1c-6.8,0-12.3,5.5-12.3,12.3s5.5,12.3,12.3,12.3h33.1c19.4,0,35.2-15.8,35.2-35.2v-208
		c0-19.4-15.8-35.2-35.2-35.2h-57.3c-13.8,0-25.8,8-31.6,19.6c-0.8-0.5-1.7-0.8-2.7-1.1c-3.3-0.9-81.4-23.8-81.4-91.2v-85.6
		c0-5.4-3.5-10.1-8.6-11.7C271.7,11.718,231.3-0.582,201.9,21.018z M356.8,224.218c1.9,0.5,3.8,0.6,5.6,0.2v189.1
		c0,24.1-19.6,43.8-43.8,43.8h-66.4H109.4c-34,0-53.1-15.2-56.9-45.7l-28-176v-1.1c0-24.1,19.6-43.8,43.8-43.8h117.9
		c6.8,0,12.3-5.5,12.3-12.3v-88.4c0-23.9,6-40.4,17.9-49.2c12.9-9.6,30.7-8.7,41.1-7v75.6
		C257.5,195.418,352.7,223.118,356.8,224.218z"/>
    </svg>

export const Love: FC<{ onClick?: Function }> = ({ onClick }) =>
    <svg onClick={() => onClick ? onClick() : {}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 460.958 460.958" style={{ width: "100%", height: "100%" }}>
                <path d="M337.843,23.957c-45.74,0-86.155,25.047-107.364,62.788c-21.209-37.741-61.623-62.788-107.364-62.788
			C55.229,23.957,0,79.186,0,147.072c0,54.355,37.736,119.46,112.16,193.506c54.115,53.84,107.363,92.031,109.603,93.631
			c2.607,1.861,5.662,2.792,8.716,2.792s6.109-0.93,8.715-2.792c2.241-1.6,55.489-39.791,109.604-93.631
			c74.424-74.046,112.16-139.151,112.16-193.506C460.958,79.186,405.729,23.957,337.843,23.957z M327.919,319.032
			c-39.843,39.681-80.171,71.279-97.44,84.307c-17.269-13.029-57.597-44.626-97.44-84.307C65.63,251.899,30,192.436,30,147.072
			c0-51.344,41.771-93.115,93.115-93.115c47.279,0,87.03,35.369,92.464,82.271c0.876,7.565,7.284,13.273,14.9,13.273
			c7.616,0,14.023-5.708,14.9-13.273c5.435-46.902,45.185-82.271,92.464-82.271c51.344,0,93.115,41.771,93.115,93.115
			C430.958,192.436,395.328,251.899,327.919,319.032z"/>
    </svg>

export const Joy: FC<{ onClick?: Function }> = ({ onClick }) =>
    <svg onClick={() => onClick ? onClick() : {}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 511.999 511.999" style={{ width: "100%", height: "100%" }}>
                <path d="M425.791,215.488c-9.95-17.866-28.824-28.963-49.256-28.963c-19.844,0-38.76,10.991-49.368,28.685
			c-2.842,4.741-1.304,10.887,3.437,13.729c4.74,2.841,10.887,1.304,13.729-3.437c7.012-11.697,19.352-18.962,32.202-18.962
			c13.176,0,25.351,7.16,31.771,18.686c1.831,3.288,5.239,5.141,8.752,5.14c1.648,0,3.32-0.408,4.861-1.266
			C426.748,226.41,428.481,220.316,425.791,215.488z"/>
                <path d="M255.062,215.488c-9.949-17.866-28.822-28.963-49.255-28.963c-19.843,0-38.759,10.991-49.368,28.685
			c-2.842,4.74-1.304,10.887,3.436,13.729c4.742,2.841,10.888,1.304,13.729-3.437c7.013-11.697,19.353-18.962,32.202-18.962
			c13.176,0,25.351,7.16,31.771,18.686c1.831,3.288,5.238,5.141,8.752,5.14c1.648,0,3.32-0.408,4.861-1.266
			C256.019,226.41,257.752,220.316,255.062,215.488z"/>
                <path d="M494.527,265.436c-16.304-17.833-77.066-32.342-89.081-35.07c-3.196-0.726-6.547,0.16-8.968,2.372
			c-2.419,2.212-3.603,5.471-3.165,8.72c1.021,7.583,4.889,34.289,11.576,57.718H176.292c5.221-20.883,8.29-42.113,9.181-48.738
			c0.438-3.25-0.746-6.507-3.165-8.72c-2.42-2.212-5.774-3.098-8.968-2.372c-12.015,2.727-72.777,17.237-89.081,35.068
			c-18.715,20.468-17.287,52.348,3.182,71.063c9.347,8.546,21.302,13.179,33.886,13.179c0.766,0,1.534-0.017,2.304-0.052
			c13.422-0.6,25.807-6.393,34.872-16.309c0.136-0.148,0.267-0.326,0.402-0.479c14.711,60.69,69.49,105.898,134.637,105.898
			c65.268,0,120.678-45.527,134.956-107.169c8.61,6.047,18.754,9.109,28.925,9.109c5.774,0,11.552-0.998,17.066-2.981
			c-15.179,36.315-39.433,68.738-70.449,93.591c-42.228,33.837-93.214,51.722-147.444,51.722
			c-130.123,0-235.985-105.863-235.985-235.985S126.475,20.015,256.598,20.015c107.365,0,201.265,72.457,228.348,176.202
			c1.396,5.349,6.862,8.553,12.21,7.155c5.348-1.396,8.552-6.864,7.155-12.21C474.928,78.608,373.066,0,256.598,0
			C115.438,0,0.598,114.84,0.598,255.999s114.84,255.999,255.999,255.999c57.988,0,114.796-19.929,159.958-56.117
			c44.475-35.635,76.146-85.633,89.181-140.78c0.223-0.945,0.298-1.888,0.251-2.811
			C510.214,296.292,506.499,278.529,494.527,265.436z M143.735,328.79c-5.46,5.971-12.917,9.458-20.998,9.819
			c-8.07,0.367-15.818-2.446-21.789-7.904c-12.325-11.268-13.184-30.462-1.916-42.787c7.437-8.134,38.42-18.652,64.359-25.508
			C158.88,288.855,151.173,320.653,143.735,328.79z M293.543,427.698c-61.979,0-112.999-47.824-118.096-108.507h236.194
			C406.54,380.25,355.177,427.698,293.543,427.698z M477.838,321.727c-5.968,5.46-13.703,8.269-21.789,7.904
			c-8.082-0.362-15.538-3.849-20.997-9.819c-3.552-3.886-5.292-9.363-7.127-14.185c-4.928-13.81-9.467-34.236-12.531-52.2
			c25.934,6.853,56.912,17.367,64.359,25.512C491.023,291.264,490.163,310.459,477.838,321.727z"/>
                <circle cx="501.393" cy="226.032" r="10.007" />
    </svg>


export const Exs: FC<{ onClick?: Function }> = ({ onClick }) =>
    <svg onClick={() => onClick ? onClick() : {}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 512 512" style={{ width: "100%", height: "100%" }}>
                <path d="M255.999,0C122.695,0,14.245,108.45,14.245,241.754c0,133.305,108.45,241.756,241.754,241.756
			c11.14,0,22.306-0.776,33.287-2.287C300.108,499.619,320.102,512,342.944,512c34.307,0,62.217-27.911,62.217-62.217l-0.237-99.567
			c0-55.273-44.968-100.242-100.241-100.242s-100.242,44.969-100.242,100.242v27.614c0,5.22,4.23,9.451,9.451,9.451h28.525
			c11.706,0,16.552,0,26.264-0.349c0.008,0,0.015,0,0.023,0c0.503,0,2.438,0.568,5.139,3.175c4.253,4.102,6.885,9.783,6.885,12.694
			v46.982c0,4.563,0.508,9.008,1.444,13.295c-8.659,1.011-17.422,1.532-26.17,1.532c-122.883,0-222.853-99.973-222.853-222.855
			s99.97-222.854,222.852-222.854s222.854,99.971,222.854,222.853c0,41.022-11.235,81.111-32.49,115.935
			c-2.719,4.454-1.313,10.271,3.143,12.99c4.453,2.719,10.271,1.313,12.99-3.143c23.067-37.789,35.258-81.286,35.258-125.781
			C497.755,108.45,389.305,0,255.999,0z M233.594,368.38h-10.253v-18.163h0c0-44.852,36.489-81.341,81.341-81.341
			c43.649,0,79.365,34.562,81.248,77.756c-8.237-6.31-18.526-10.072-29.68-10.072h-66.13l-19.115,0.11
			c-0.132,0.001-0.266,0.005-0.398,0.011C262.111,337.089,237.783,338.272,233.594,368.38z M268.708,368.031
			c-0.237,0-0.474,0.004-0.709,0.013c-6.012,0.217-10.12,0.294-15.319,0.321c2.268-10.96,9.122-12.323,18.635-12.793l18.859-0.108
			h66.076c16.546,0,30.007,13.463,30.007,30.009v64.311c0,23.885-19.432,43.316-43.316,43.316s-43.317-19.432-43.317-43.316v-46.982
			c0-8.555-4.971-18.877-12.664-26.298C281.205,370.949,274.909,368.031,268.708,368.031z"/>
                <path d="M249.942,192.26l-17.969-17.969l17.969-17.969c3.688-3.691,3.688-9.674-0.003-13.366c-3.692-3.689-9.675-3.689-13.366,0
			l-17.969,17.969l-17.969-17.969c-3.692-3.689-9.675-3.689-13.366,0c-3.691,3.692-3.691,9.675,0,13.366l17.969,17.969
			l-17.969,17.969c-3.691,3.692-3.691,9.675,0,13.366c1.846,1.845,4.265,2.767,6.683,2.767s4.837-0.922,6.683-2.767l17.969-17.969
			l17.969,17.969c1.846,1.845,4.265,2.767,6.683,2.767s4.837-0.922,6.683-2.767C253.633,201.934,253.633,195.951,249.942,192.26z"/>
                <path d="M428.87,192.26l-17.969-17.969l17.969-17.969c3.691-3.692,3.691-9.675,0-13.366c-3.692-3.69-9.675-3.69-13.366,0
			l-17.969,17.969l-17.969-17.969c-3.692-3.69-9.675-3.69-13.366,0c-3.691,3.692-3.691,9.675,0,13.366l17.969,17.969l-17.969,17.969
			c-3.691,3.692-3.691,9.675,0,13.366c1.846,1.845,4.265,2.767,6.683,2.767c2.418,0,4.837-0.922,6.683-2.767l17.969-17.969
			l17.969,17.969c1.846,1.845,4.265,2.767,6.683,2.767c2.418,0,4.837-0.922,6.683-2.767
			C432.56,201.935,432.56,195.952,428.87,192.26z"/>
                <circle cx="434.472" cy="389.676" r="9.451" />
    </svg>

export const Minus: FC<{ onClick?: Function }> = ({ onClick }) =>
    <svg onClick={() => onClick ? onClick() : {}} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 511.999 511.999" style={{ width: "100%", height: "100%" }}>
                <path d="M470.486,116.194c-26.457-40.51-63.611-72.601-107.443-92.805c-5.025-2.314-10.964-0.12-13.278,4.9
			c-2.312,5.02-0.12,10.964,4.9,13.278c40.412,18.626,74.668,48.217,99.065,85.572c25.028,38.321,38.256,82.881,38.256,128.862
			c0,130.123-105.863,235.983-235.985,235.983S20.015,386.123,20.015,256.001S125.877,20.015,255.999,20.015
			c5.528,0,10.007-4.479,10.007-10.007C266.007,4.479,261.527,0,255.999,0C114.84,0,0,114.841,0,256.001
			c0,141.158,114.84,255.998,255.999,255.998s255.999-114.84,255.999-255.998C512,206.122,497.644,157.778,470.486,116.194z"/>
                <path d="M397.001,377.025l-16.719-16.718c-3.907-3.907-10.244-3.907-14.152,0l-9.468,9.47l-11.731-11.733
			c-1.877-1.877-4.422-2.931-7.077-2.931s-5.198,1.054-7.077,2.93l-14.17,14.172l-12.776-12.777
			c-1.877-1.877-4.422-2.931-7.077-2.931s-5.198,1.054-7.077,2.931l-12.428,12.429l-8.597-8.598
			c-3.911-3.907-10.246-3.907-14.156-0.001L238.3,379.463c-3.908,3.909-3.908,10.245,0,14.153c1.955,1.953,4.517,2.93,7.077,2.93
			s5.122-0.977,7.077-2.93l9.119-9.12l8.597,8.598c1.877,1.876,4.422,2.93,7.077,2.93s5.198-1.054,7.077-2.931l12.428-12.428
			l12.776,12.776c1.877,1.877,4.422,2.931,7.077,2.931c2.655,0,5.198-1.054,7.077-2.93l14.17-14.172l11.731,11.733
			c1.876,1.877,4.422,2.931,7.077,2.931s5.198-1.054,7.077-2.93l9.468-9.47l9.644,9.643c3.907,3.907,10.244,3.908,14.152-0.001
			C400.911,387.269,400.911,380.932,397.001,377.025z"/>
                <circle cx="324.744" cy="20.015" r="10.007" />
                <path d="M257.388,234.367l-61.96-27.353c-5.052-2.231-10.964,0.056-13.196,5.113c-2.231,5.057,0.057,10.965,5.114,13.198
			l41.094,18.143l-41.054,17.902c-5.065,2.21-7.381,8.107-5.172,13.174c1.641,3.764,5.317,6.01,9.177,6.01
			c1.334,0,2.693-0.268,3.995-0.838l61.96-27.02c3.641-1.588,5.998-5.177,6.007-9.151
			C263.363,239.573,261.023,235.971,257.388,234.367z"/>
                <path d="M440.715,261.373l-41.054-17.902l41.094-18.143c5.057-2.232,7.347-8.141,5.114-13.198s-8.143-7.345-13.196-5.113
			l-61.96,27.353c-3.633,1.604-5.975,5.205-5.966,9.177c0.009,3.972,2.366,7.563,6.007,9.151l61.96,27.02
			c1.302,0.568,2.661,0.837,3.995,0.837c3.86,0,7.536-2.246,9.177-6.01C448.096,269.479,445.781,263.582,440.715,261.373z"/>
    </svg>
