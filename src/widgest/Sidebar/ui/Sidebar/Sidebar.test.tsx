import { fireEvent, screen } from '@testing-library/react';
import {
    renderWithTranslation,
} from 'shared/lib/tests/RenderWithTranslation/RenderWithTranslation';
import { Sidebar } from 'widgest/Sidebar';

describe('Sidebar', () => {
    test('Test render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });
    test('Test toggle', () => {
        renderWithTranslation(<Sidebar />);
        const toggleBnt = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBnt);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
