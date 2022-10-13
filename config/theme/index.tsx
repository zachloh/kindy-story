import { MantineProvider, ButtonStylesParams } from '@mantine/core';
import React from 'react';

type CustomMantineProviderProps = {
  children: React.ReactNode;
};

export const CustomMantineProvider = ({
  children,
}: CustomMantineProviderProps) => {
  return (
    <MantineProvider
      theme={{
        fontFamily:
          'Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
        components: {
          Button: {
            styles: (theme, params: ButtonStylesParams) => ({
              root: {
                backgroundColor:
                  params.variant === 'filled'
                    ? theme.colors.violet[5]
                    : undefined,
                '&:hover': {
                  backgroundColor:
                    params.variant === 'filled'
                      ? theme.fn.darken(theme.colors.violet[5], 0.2)
                      : undefined,
                },
              },
            }),
          },
        },
      }}
      withGlobalStyles
      withNormalizeCSS
      withCSSVariables
    >
      {children}
    </MantineProvider>
  );
};
