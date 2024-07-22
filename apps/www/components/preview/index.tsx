// import { HomeIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import dynamic from 'next/dynamic';
import { Wrapper } from './wrapper';

const Button = dynamic(() =>
  import('ruru-ui/components/button').then((m) => m.Button),
);

const Spinner = dynamic(() =>
  import('ruru-ui/components/spinner').then((m) => m.Spinner),
);

export default {
  button: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Button className='w-fit' variant={"secondary"}> Button </Button>
      </div>
    </Wrapper>
  ),
  spinner: (
    <Wrapper>
      <div className="flex items-center justify-center gap-4">
        <Spinner size={30} className='my-4' />
      </div>
    </Wrapper>
  ),
} as Record<string, ReactNode>;