import { render, screen } from '@testing-library/vue';
import Home from './Home.vue';

test('renders Home component with correct headings', async () => {
    render(Home);
  
    // 使用 findByText 来确保元素异步渲染完成
    const heading = await screen.findByText('財務摘要');
    expect(heading).toBeInTheDocument();
  
    const totalIncomeHeading = await screen.findByText('總收入');
    expect(totalIncomeHeading).toBeInTheDocument();
  
    const totalExpenseHeading = await screen.findByText('總支出');
    expect(totalExpenseHeading).toBeInTheDocument();
  
    const balanceHeading = await screen.findByText('餘額');
    expect(balanceHeading).toBeInTheDocument();
  });
  