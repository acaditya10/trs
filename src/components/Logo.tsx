import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark' | 'original';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  className = '',
  size = 'md',
  showSubtitle = true
}) => {
  // Color mappings based on theme context
  const isLight = variant === 'light'; // Light elements on dark canvas
  const groomColor = isLight ? '#F2EEE7' : '#0A0A09';
  const textColor = isLight ? '#F2EEE7' : '#0A0A09';
  const trademarkColor = isLight ? '#E8E2D8' : '#0A0A09';
  const lineColor = isLight ? '#B49A78' : '#0A0A09';
  const redColor = '#E02424'; // Vibrant signature red matching the logo

  // Dimensions based on size preset
  const sizeStyles = {
    sm: 'h-10 sm:h-12 w-auto',
    md: 'h-12 sm:h-14 md:h-16 w-auto',
    lg: 'h-16 sm:h-20 md:h-24 w-auto',
    xl: 'h-24 sm:h-28 md:h-32 w-auto',
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 620 280"
        className={`${sizeStyles} transition-all duration-300`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="The Ram Sham Wedding Photography Logo"
      >
        {/* Dancing Couple Silhouette */}
        <g transform="translate(18, 30)">
          {/* Groom (Man in Tuxedo / Achkan Silhouette) */}
          <path
            d="M 128 38 C 124 33, 116 30, 110 33 C 104 36, 101 42, 103 48 C 105 52, 109 54, 113 54 C 117 54, 122 51, 125 47 C 127 44, 128 41, 128 38 Z"
            fill={groomColor}
          />
          <path
            d="M 103 45 C 99 43, 96 39, 95 34 C 95 28, 99 22, 105 20 C 112 18, 120 20, 124 25 C 121 24, 115 24, 110 26 C 105 28, 102 33, 102 38 C 102 41, 103 43, 103 45 Z"
            fill={groomColor}
          />
          <path
            d="M 97 40 C 93 42, 88 47, 85 53 C 81 60, 78 70, 81 77 C 83 81, 87 81, 90 77 C 94 72, 97 64, 100 58 C 102 54, 103 49, 101 44 C 100 42, 99 40, 97 40 Z"
            fill={groomColor}
          />
          <path
            d="M 85 55 C 80 58, 73 66, 74 74 C 75 79, 81 83, 89 83 C 96 83, 102 79, 107 74 C 111 70, 114 65, 116 60 C 117 58, 114 57, 112 59 C 107 64, 102 70, 95 72 C 89 74, 83 73, 81 69 C 80 65, 83 59, 87 56 C 89 54, 87 52, 85 55 Z"
            fill={groomColor}
          />
          <path
            d="M 105 52 C 103 57, 100 66, 97 76 C 94 86, 90 99, 85 111 C 82 119, 79 127, 75 136 C 73 139, 76 142, 79 139 C 85 131, 91 120, 95 109 C 100 97, 104 84, 107 72 C 109 64, 111 57, 112 52 C 112 50, 107 49, 105 52 Z"
            fill={groomColor}
          />
          <path
            d="M 108 72 C 105 78, 103 85, 100 93 C 99 96, 102 98, 104 96 C 107 89, 111 81, 114 74 C 115 71, 110 69, 108 72 Z"
            fill={groomColor}
          />

          {/* Bride (Red & Accent Curves) */}
          <path
            d="M 130 45 C 133 41, 137 39, 142 41 C 146 43, 148 48, 147 53 C 146 58, 141 62, 136 61 C 132 60, 129 55, 129 50 C 129 48, 130 46, 130 45 Z"
            fill={redColor}
          />
          <path
            d="M 142 41 C 145 39, 148 42, 148 46 C 147 50, 144 54, 140 56 C 143 53, 145 49, 144 46 C 143 43, 141 42, 142 41 Z"
            fill={groomColor}
          />
          <path
            d="M 131 53 C 126 57, 120 63, 116 71 C 112 79, 111 88, 112 97 C 112 100, 116 100, 117 97 C 118 90, 120 82, 124 75 C 127 69, 132 63, 135 58 C 136 55, 133 52, 131 53 Z"
            fill={groomColor}
          />
          <path
            d="M 133 50 C 128 47, 121 44, 113 45 C 107 46, 101 49, 96 54 C 94 56, 96 59, 99 57 C 104 53, 109 50, 115 49 C 121 48, 127 50, 131 53 C 134 55, 136 52, 133 50 Z"
            fill={redColor}
          />
          <path
            d="M 116 72 C 122 75, 129 79, 136 85 C 143 91, 146 98, 142 104 C 139 108, 132 108, 126 106 C 120 104, 115 100, 110 96 C 108 94, 106 97, 108 99 C 114 104, 120 108, 127 110 C 134 112, 142 111, 147 106 C 152 100, 150 90, 142 83 C 135 77, 127 72, 119 69 C 116 68, 114 71, 116 72 Z"
            fill={redColor}
          />

          {/* Dynamic Swirling Red Gown Skirt */}
          <path
            d="M 108 98 C 102 110, 94 123, 86 137 C 76 153, 62 169, 45 180 C 34 187, 21 192, 9 187 C 3 184, -2 178, 1 172 C 4 167, 12 165, 18 167 C 29 171, 41 169, 52 162 C 67 152, 80 137, 91 121 C 99 109, 106 97, 112 85 C 114 82, 110 80, 108 83 C 102 96, 94 108, 86 122 C 75 138, 62 154, 46 166 C 35 174, 22 178, 10 174 C 4 171, 1 166, 3 162 C 6 158, 13 158, 18 160 C 27 163, 37 161, 47 155 C 61 146, 73 133, 83 118 C 92 104, 99 91, 105 78 C 106 75, 104 74, 103 76 Z"
            fill={redColor}
          />
          <path
            d="M 45 168 C 65 177, 88 184, 112 186 C 136 188, 160 184, 180 173 C 187 169, 186 164, 179 166 C 161 174, 139 177, 117 176 C 94 174, 71 168, 51 159 C 45 156, 40 165, 45 168 Z"
            fill={redColor}
          />
          <path
            d="M 6 177 C 22 188, 43 194, 65 197 C 88 200, 112 198, 134 192 C 147 188, 159 181, 169 172 C 174 168, 178 174, 173 178 C 162 188, 149 196, 135 200 C 111 207, 86 208, 62 205 C 38 202, 15 195, -2 183 C -6 180, 0 173, 6 177 Z"
            fill={redColor}
          />
          <path
            d="M 125 106 C 133 116, 142 127, 152 139 C 162 151, 174 163, 187 172 C 190 174, 192 171, 189 168 C 177 159, 166 148, 156 137 C 146 125, 138 114, 130 104 C 128 101, 123 103, 125 106 Z"
            fill={redColor}
          />
          <path
            d="M 136 122 C 145 133, 155 145, 166 156 C 171 161, 173 158, 168 153 C 158 143, 149 132, 140 121 C 138 118, 134 120, 136 122 Z"
            fill={groomColor}
          />
        </g>

        {/* Typography & Brand Text */}
        <g transform="translate(195, 140)">
          {/* THE RAM SHAM Main Brand Headline */}
          <text
            x="0"
            y="0"
            fontFamily="'Cinzel', 'Playfair Display', Georgia, serif"
            fontSize="43"
            fontWeight="800"
            letterSpacing="0.04em"
            fill={textColor}
          >
            THE RAM SHAM
          </text>

          {/* Registered Trademark Circle-R Symbol (R) */}
          <g transform="translate(378, -32)">
            <circle
              cx="10"
              cy="10"
              r="9"
              stroke={trademarkColor}
              strokeWidth="1.4"
              fill="none"
            />
            <text
              x="10"
              y="14"
              fontFamily="'Playfair Display', serif"
              fontSize="11"
              fontWeight="700"
              fill={trademarkColor}
              textAnchor="middle"
            >
              R
            </text>
          </g>

          {/* Subtitle Bar: CMYK Registration Dots + WEDDING PHOTOGRAPHY + CMYK Dots */}
          {showSubtitle && (
            <g transform="translate(0, 19)">
              {/* Left 3 Registration Dots (Cyan, Magenta, Yellow) */}
              <circle cx="3" cy="-4" r="3" fill="#00AEEF" />
              <circle cx="12" cy="-4" r="3" fill="#EC008C" />
              <circle cx="21" cy="-4" r="3" fill="#FFF200" />

              {/* Left Connecting Line */}
              <line
                x1="28"
                y1="-4"
                x2="44"
                y2="-4"
                stroke={lineColor}
                strokeWidth="1.8"
              />

              {/* Subtitle Text: WEDDING PHOTOGRAPHY in Red */}
              <text
                x="50"
                y="0"
                fontFamily="'Cinzel', 'Playfair Display', sans-serif"
                fontSize="13.5"
                fontWeight="700"
                letterSpacing="0.28em"
                fill={redColor}
              >
                WEDDING PHOTOGRAPHY
              </text>

              {/* Right Connecting Line */}
              <line
                x1="334"
                y1="-4"
                x2="350"
                y2="-4"
                stroke={lineColor}
                strokeWidth="1.8"
              />

              {/* Right 3 Registration Dots (Cyan, Magenta, Yellow) */}
              <circle cx="357" cy="-4" r="3" fill="#00AEEF" />
              <circle cx="366" cy="-4" r="3" fill="#EC008C" />
              <circle cx="375" cy="-4" r="3" fill="#FFF200" />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
};
